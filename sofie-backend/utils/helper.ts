export async function addDataToGoogleSheet(
  spreadsheet_id: string | undefined,
  range: string,
  values: Array<string>
) {
  //googleapis
  const { google } = require("googleapis");

  const auth = new google.auth.GoogleAuth({
    keyFile: "our-foundry-368813-deac6a759654.json", //the key file
    //url to spreadsheets API
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  //Auth client Object
  const authClientObject = await auth.getClient();

  //Google sheets instance
  const googleSheetsInstance = google.sheets({
    version: "v4",
    auth: authClientObject,
  });

  // spreadsheet id
  const spreadsheetId = spreadsheet_id;

  //write data into the google sheets
  await googleSheetsInstance.spreadsheets.values.append({
    auth, //auth object
    spreadsheetId, //spreadsheet id
    range: range, //sheet name and range of cells
    valueInputOption: "USER_ENTERED", // The information will be passed according to what the usere passes in as date, number or text
    resource: {
      values: [values],
    },
  });
}
