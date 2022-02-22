import TableRow from "./tableRow";
import tableProps from './tableProps'

function ResultsTable(props: tableProps) {

    const checkBoxSelection: Array<boolean> = [];

    props.data.forEach((item) => {
        checkBoxSelection.push(false);
    });

    function allCheckBox(): void {
        if (checkBoxSelection.length === checkBoxSelection.filter(Boolean).length) {
            for (var i in checkBoxSelection) {
                checkBoxSelection[i] = !checkBoxSelection[i];
                (document.getElementById(`row-checkbox-${i}`) as HTMLInputElement).checked = false;                

            }
        }
        else {
            for (var j in checkBoxSelection) {
                if (checkBoxSelection[j] === false) {
                    checkBoxSelection[j] = !checkBoxSelection[j];
                    (document.getElementById(`row-checkbox-${j}`) as HTMLInputElement).checked = true
                }
            }
        }
        console.log(`Selected: ${JSON.stringify(checkBoxSelection)}`);
        console.log(`Selected: ${JSON.stringify(checkBoxSelection.length)}`);
        console.log(`Selected: ${JSON.stringify(checkBoxSelection.filter(Boolean).length)}`);
    };

    function rowCheckClicked(rowID: number): void {
        checkBoxSelection[rowID] = !checkBoxSelection[rowID];
        console.log(`Selected: ${JSON.stringify(checkBoxSelection)}`);
        console.log(`Selected: ${JSON.stringify(checkBoxSelection.length)}`);
        console.log(`Selected: ${JSON.stringify(checkBoxSelection.filter(Boolean).length)}`);
    }

    return (
        <div className="flex flex-col justify-center h-full">
            <div className="w-full mx-auto bg-background shadow-lg rounded-sm">
                <div className="p-3">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            <thead className="text-m text-[#FFFFFF] bg-background">
                                <tr>
                                    <td className="text-center"><input type="checkbox" onChange={() => allCheckBox()}/></td>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="text-left">Date</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="text-left">Location</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="text-left">Title</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="text-left">Action</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-m text-[#FFFFFF]">
                                {
                                    props.data.map((item, index) => 
                                        <TableRow data={item} id={index} checkBoxHandler={rowCheckClicked}></TableRow>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultsTable;