import cn from 'classnames';
import { PaginationProps } from './props';
import { usePaginationRange } from './usePaginationRange';
import { AppContext } from '../../../context/AppContext';
import { ReactComponent as PrevIcon } from './arr_left.svg';
import { ReactComponent as NextIcon } from './arr_right.svg';

import s from "./index.module.scss";
import { useContext } from 'react';

export const Pagination: React.FC<PaginationProps> = ({ className, ...rest }) => {

	const {
		productsPerPage, 
		currentPage, 
		setCurrentPage, 
		productsCount
	} = useContext(AppContext);
	const pagesInterval = 4;
	const pagesCount = Math.ceil(productsCount / productsPerPage);
	
	const paginationRange = usePaginationRange(pagesCount, currentPage, pagesInterval);

	const handlePageNav = (page: number):void => {
		let newPage = page;
		if (newPage < 1) {
			newPage = 1;
		}
		if (newPage > pagesCount) {
			newPage = pagesCount;
		}
		setCurrentPage(newPage);
		window.scrollTo({top: 0, behavior: 'smooth'});
	};

	const handlePrev = (): void => {
		if (currentPage > 1) {
			setCurrentPage(page => page - 1);
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	const handleNext = (): void => {
		if (currentPage < pagesCount) {
			setCurrentPage(page => page + 1);	
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	const paginationButtons = paginationRange.map((p, idx) => {
		if (typeof p === 'number') {
			return (
				<button
					className={cn(s.pagination__page, {
						[s.pagination__page_active]: currentPage == p
					})}
					aria-label={`На страницу ${p}`}
					onClick={():void => handlePageNav(p)}
					key={p}>
					{p}
				</button>
			);
		} else {
			return (
				<span
					className={s.pagination__dots}
					key={'dot' + paginationRange[idx-1]}
				>
					{p}
				</span>
			);
		}
	});

	return (
		<>
			{pagesCount < 2 ? <></>
				:
				<div className={cn(s.pagination, className)} {...rest}>
					<button
						aria-label='К предыдущей странице'
						className={cn(s.pagination__prev, 'icon-arr_left')}
						disabled={currentPage === 1}
						onClick={handlePrev}>
							<PrevIcon />
					</button>
					<div className={s.pagination__pages}>
						{paginationButtons}
					</div>
					<button
						aria-label='К следующей странице'
						className={cn(s.pagination__next, 'icon-arr_right')}
						disabled={currentPage === pagesCount}
						onClick={handleNext}>
							<NextIcon />
					</button>
				</div>}
		</>
	);
};
