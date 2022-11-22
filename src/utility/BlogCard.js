import React, { useState } from 'react';

export const BlogCard = () => {
	const [cards, setCards] = useState([
		{
			id: 1,
			sectorId: 'Ed/012A4',
			sector: 'Education',
			title: 'Case of Whistleblowing in the University of Nigeria',
			description:
				'Education fraud occurs when a school or university violates federally mandated standards or the Higher Education Act (HEA) to increase profits. Ruthless administrators cheat the system by enrolling more students or cutting costs. These schemes will eventually exert their burden on taxpayers as unqualified',
		},
		{
			id: 2,
			sectorId: 'Fi/012A4',
			sector: 'Finabc',
			title: 'Case of Whistleblowing in the University of Nigeria',
			description:
				'Education fraud occurs when a school or university violates federally mandated standards or the Higher Education Act (HEA) to increase profits. Ruthless administrators cheat the system by enrolling more students or cutting costs. These schemes will eventually exert their burden on taxpayers as unqualified',
		},
		{
			id: 3,
			sectorId: 'Fi/012A4',
			sector: 'Finabc',
			title: 'Case of Whistleblowing in the University of Nigeria',
			description:
				'Education fraud occurs when a school or university violates federally mandated standards or the Higher Education Act (HEA) to increase profits. Ruthless administrators cheat the system by enrolling more students or cutting costs. These schemes will eventually exert their burden on taxpayers as unqualified',
		},
		{
			id: 4,
			sectorId: 'Fi/012A4',
			sector: 'Finabc',
			title: 'Case of Whistleblowing in the University of Nigeria',
			description:
				'Education fraud occurs when a school or university violates federally mandated standards or the Higher Education Act (HEA) to increase profits. Ruthless administrators cheat the system by enrolling more students or cutting costs. These schemes will eventually exert their burden on taxpayers as unqualified',
		},
	]);

	return (
		<main>
			{cards.map((card) => (
				<section id='blog_grid-container'>
					<div class='blog_box-wrapper' key={card.id}>
						<div class='blog_description-label'>
							<span class='blog_code'>{card.sectorId}</span>
							<span class='blog_sector-category'>{card.sector}</span>
						</div>
						<h4 class='blog_brief'>{card.title}</h4>
						<h6 class='blog_summary'>{card.description}</h6>
						<button class='read_more-button'>
							<a href='./read-more.html'>Read More</a>
						</button>
					</div>
				</section>
			))}
		</main>
	);
};
