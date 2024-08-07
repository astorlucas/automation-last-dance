import Excel from 'exceljs';

export async function getUserData(sheetName) {
    const workbook = new Excel.Workbook();
    await workbook.xlsx.readFile('./data/testData.xlsx');
    const worksheet = workbook.getWorksheet(sheetName);

    const data = [];
    worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
        if (rowNumber > 1) { // Skip the header row
            const rowData = {
                username: row.getCell(1).value,
                token: row.getCell(2).value,
                password: row.getCell(3).value
            };
            data.push(rowData);
        }
    });

    return data;
}
