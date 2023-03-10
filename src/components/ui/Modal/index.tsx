import { useEffect } from 'react';
import FocusTrap from 'focus-trap-react';
import cn from 'classnames';
import { Portal } from '../..';
import { ModalProps } from './props';
import { ReactComponent as CloseIcon } from './close.svg';

import s from './index.module.scss';

export const Modal:React.FC<ModalProps> = ({title, shown, onClose, children, className, ...rest}) => {

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent): void => {
			if (e.key === 'Escape') {
				onClose();
			}
		};
		window.addEventListener('keydown', handleEsc);

		if (shown) {
			document.body.setAttribute('style', 'overflow: hidden');
		}

		return () => {
			window.removeEventListener('keydown', handleEsc);
			document.body.removeAttribute('style');
		};
	}, [shown, onClose]);

	if (!shown) {
		return null;
	}

	return (
		<Portal selector='#modal'>
			<div
			onClick={onClose}
			className={cn(s.modal, className)} 
			{...rest}>
				<FocusTrap>
					<div 
					className={s.modal__body} 
					onClick={e => e.stopPropagation()} 
					id='modal-body'>
						<button 
						onClick={onClose}
						className={s.modal__close}
						aria-label='закрыть окно'>
							<CloseIcon />
						</button>
						{title &&
						<h2 className={s.modal__title}>
							{title}
						</h2>}
						<div className={s.modal__content}>
							{children}
						</div>
					</div>				
				</FocusTrap>
			</div>			
		</Portal>
	);
};