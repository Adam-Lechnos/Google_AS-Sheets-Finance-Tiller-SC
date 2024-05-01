function sendEmailBudgetReport(){
  sendEmailBudgetReportArgs("")
}



function sendEmailBudgetReportArgs(monthName, spendWarn, spendWarnTh) {

    if (monthName === ""){
      monthName = ""
      isEOMonthReport = ""
      spendWarnMessage = ""
    } else {
      isEOMonthReport = "Monthly "
      if (spendWarn) {spendWarn='Yes'} else {spendWarn='No'}
      spendWarnMessage = `Spend Warn Activated: ${spendWarn} (spend threshold within 50% month set to ${spendWarnTh*100}%)`
      additionalMessage = `
  ** Monthly Status reports are sent month ends **`
    }

  var budgetAllocated = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Current Month's Spending Allowance").getRange("B23"); 
  var budgetRemaining = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Current Month's Spending Allowance").getRange("D23");
  var budgetAllocRest = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Current Month's Spending Allowance").getRange("B24"); 
  var budgetRemRest = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Current Month's Spending Allowance").getRange("D24");
  var budgetAllocCS = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Current Month's Spending Allowance").getRange("B25"); 
  var budgetRemCS = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Current Month's Spending Allowance").getRange("D25");
  var budgetAllocRM = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Current Month's Spending Allowance").getRange("B26"); 
  var budgetRemRM = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Current Month's Spending Allowance").getRange("D26");
  var budgetAllocCH = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Current Month's Spending Allowance").getRange("B27"); 
  var budgetRemCH = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Current Month's Spending Allowance").getRange("D27");
  var budgetAllocGroc = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Current Month's Spending Allowance").getRange("B28"); 
  var budgetRemGroc = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Current Month's Spending Allowance").getRange("D28");
  var budgetAllocCW = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Current Month's Spending Allowance").getRange("B29"); 
  var budgetRemCW = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Current Month's Spending Allowance").getRange("D29");
  var budgetAllocRE = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Current Month's Spending Allowance").getRange("B30"); 
  var budgetRemRE = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Current Month's Spending Allowance").getRange("D30");
  var budgetAllocatedValue = budgetAllocated.getValue();
  var budgetRemainingValue = budgetRemaining.getValue();
  var budgetAllocRestValue = budgetAllocRest.getValue();
  var budgetRemRestValue = budgetRemRest.getValue();
  var budgetAllocCSValue = budgetAllocCS.getValue();
  var budgetRemCSValue = budgetRemCS.getValue();
  var budgetAllocRMValue = budgetAllocRM.getValue();
  var budgetRemRMValue = budgetRemRM.getValue();
  var budgetAllocCHValue = budgetAllocCH.getValue();
  var budgetRemCHValue = budgetRemCH.getValue();
  var budgetAllocGrocValue = budgetAllocGroc.getValue();
  var budgetRemGrocValue = budgetRemGroc.getValue(); 
  var budgetAllocCWValue = budgetAllocCW.getValue();
  var budgetRemCWValue = budgetRemCW.getValue();
  var budgetAllocREValue = budgetAllocRE.getValue();
  var budgetRemREValue = budgetRemRE.getValue();
  var budgetAllocOOB = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Current Month's Spending Allowance").getRange("C23").getValue();
  var budgetRestOOB = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Current Month's Spending Allowance").getRange("C24").getValue();
  var budgetCSOOB = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Current Month's Spending Allowance").getRange("C25").getValue();
  var budgetRMOOB = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Current Month's Spending Allowance").getRange("C26").getValue();
  var budgetCHOOB = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Current Month's Spending Allowance").getRange("C27").getValue();
  var budgetGrocOOB = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Current Month's Spending Allowance").getRange("C28").getValue();
  var budgetCWOOB = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Current Month's Spending Allowance").getRange("C29").getValue();
  var budgetREOOB = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Current Month's Spending Allowance").getRange("C30").getValue();
  var additionalMessage = ""

  // Fetch the email address
  var emailAddress = 'adam.lechnos@gmail.com';

  // Fetch current data
  var currentDate = Utilities.formatDate(new Date(), "GMT+1", "MM/dd/yyyy")

  // Send Alert Email.
  var message = `${monthName}${isEOMonthReport}Budget status (remaining / allocated) as of ${currentDate}:
-----------------------------------------------------------------------
  * Total Spending Allowance  --  $${budgetRemainingValue} / $${budgetAllocatedValue}     ${budgetAllocOOB}
-----------------------------------------------------------------------
     * Restuarants                      --- $${budgetRemRestValue} / $${budgetAllocRestValue}   ${budgetRestOOB}
     * Coffee & Snacks               --- $${budgetRemCSValue} / $${budgetAllocCSValue}   ${budgetCSOOB}
     * Reimbursable Meals         --- $${budgetRemRMValue} / $${budgetAllocRMValue}   ${budgetRMOOB}
     * Recreation/Entertainment --- $${budgetRemREValue} / $${budgetAllocREValue}   ${budgetREOOB}
     * Groceries                          --- $${budgetRemGrocValue} / $${budgetAllocGrocValue}   ${budgetGrocOOB}
     * Cash in Hand                    --- $${budgetRemCHValue} / $${budgetAllocCHValue}   ${budgetCHOOB}
------------------------------------------------------------------------
x - Out of budget or overspent
y - Effects remaining 'Total Spending Allowance' and never allocated

${spendWarnMessage}
  
Detailed report: https://docs.google.com/spreadsheets/d/1x7Nk6Cc-ga2lx_iS3lgS6vEzzCbjLITkQtbrWkabtLk/edit#gid=10068321

Groceries & Household Budget Tracking (how allocation is determined): https://docs.google.com/spreadsheets/d/1Iku7b5wy87PS5cuhEk5Eyh-dbCF9kIHZtm6KQxhmX0A
${additionalMessage}`; // Second column
  var subject = `${monthName}${isEOMonthReport}Budget Status Report - Sarah`;
  MailApp.sendEmail(emailAddress, subject, message);
}