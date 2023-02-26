import cn from 'classnames';
import { useCallback, useEffect, useRef } from 'react';

import { PanelProps } from './props';

import s from './index.module.scss';

export function Panel<T extends string>({ options, currentOption, onOptionSelect, className, ...rest}: PanelProps<T>)  {

	const bgRef = useRef<HTMLSpanElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);

	const buttons: JSX.Element[] = [];

	for (const key in options) {
		buttons.push((
			<button
				id={key}
				onClick={() => onOptionSelect(key)}
				className={cn(s.panel__btn, {
					[s.panel__btn_active]: key === currentOption
				})}
				key={key}
			>
				{options[key]}
			</button>
		));
	}

	const setActiveBg = useCallback(() => {
		if (bgRef.current && wrapperRef.current) {
			const selectedBtn = wrapperRef.current
				.querySelector<HTMLElement>(`#${currentOption}`);

			if (selectedBtn) {
				bgRef.current.style.opacity = '1';
				bgRef.current.style.width = selectedBtn.offsetWidth + 'px';
				bgRef.current.style.transform = `translateX(${selectedBtn.offsetLeft}px)`;
			}
		}}, [currentOption]);

	useEffect(() => {
		setActiveBg();
		window.addEventListener('resize', setActiveBg);

		return () => {
			window.removeEventListener('resize', setActiveBg);
		};
	}, [onOptionSelect, currentOption, setActiveBg]);

	return (
		<div className={cn(s.panel, className)} {...rest}>
			<div className={cn(s.panel__wrapper)} ref={wrapperRef}>
				{buttons}
				<span className={cn(s.panel__activeBg)} ref={bgRef}/>
			</div>
		</div>
	);
}
