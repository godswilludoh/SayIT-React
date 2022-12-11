import { TableRow } from './TableRow';

export const UserTableInfo = ({ column, reports }) => {
	return (
		<table>
			<thead>
				<tr>
					{column.map((item, index) => (
						<TableHeadItem item={item} key={index} />
					))}
				</tr>
			</thead>
			<tbody>
				{reports.map((report, index) => {
					console.log(report);
					const { id, createdAt, sector, status } = report;

					return (
						<TableRow
							key={id}
							id={id}
							index={index}
							createdAt={createdAt}
							sector={sector}
							status={status}
						/>
					);
				})}
			</tbody>
		</table>
	);
};

const TableHeadItem = ({ item }) => <th>{item.heading}</th>;
