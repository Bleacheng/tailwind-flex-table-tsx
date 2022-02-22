import { tableRowData } from './tableProps';

interface Props {
    data: tableRowData;
    id: number;
    checkBoxHandler: (rowID: number) => void;
}

function TableRow({ data, id, checkBoxHandler}: Props) {
    return (
        <tr key={id} className="odd:bg-greyscale1 even:bg-greyscale2">
            <td className="text-center"><input type="checkbox" id={`row-checkbox-${id}`} onChange={() => checkBoxHandler(id)}/></td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left">{data.date}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left">{data.location}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left">{data.title}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left text-telemetryblue">{data.action}</div>
            </td>
        </tr>
    )
}

export default TableRow;