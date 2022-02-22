export interface tableRowData {
    id: number;
    date: string;
    location: string;
    title: string;
    action: string;
};

interface TableProps {
    data: Array<tableRowData>;
};

export default TableProps;