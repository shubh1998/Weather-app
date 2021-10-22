export type LineChartGraphDataType = {
    labels: string[],
    datasets: {
        label: string,
        data: any[],
        fill: boolean,
        backgroundColor?: string,
        borderColor: string
    }[]
}