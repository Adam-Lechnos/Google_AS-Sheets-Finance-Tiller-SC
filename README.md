# Google_AS-Sheets-Finance-Tiller-SC
Automation for Tiller Money spreadsheets created in Google Sheets, for budget monitoring and alerts (SC)

## Tiller Money
* Refer to the [How Tiller Works](https://www.tillerhq.com/how-tiller-works/) webpage for additional information about Tiller Money.

## Google Apps Script Configuration

### Triggers

| Function | Event Source ( - t)^ | Time Based Trigger ( - nn)* | Time of Day / Hour | Failure Notifications |
| -------- | ------------ | ------------------ | ----------- | --------------------- |
| sendEmailAlert | Time-driven | Week timer - Tuesday | 6pm to 7pm | Daily |
| sendEmailAlert | Time-driven | Week timer - Friday | 6pm to 7pm | Daily |
| sendEmailBudgetReport | Time-driven | Week timer - Wednesday | 6pm to 7pm | Daily |
| sendEmailBudgetReport | Time-driven | Week timer - Friday | 4pm to 5pm | Daily |
| populateHistoricRecord | Time-driven | Month timer - 15th | 10pm to 11pm | Weekly |
| populateHistoricRecordEO | Time-driven | Month timer - 28th | 10pm to 11pm | Weekly |
| populateHistoricRecordEO | Time-driven | Month timer - 29th | 10pm to 11pm | Weekly |
| populateHistoricRecordEO | Time-driven | Month timer - 30th | 10pm to 11pm | Weekly |
| populateHistoricRecordEO | Time-driven | Month timer - 31st | 10pm to 11pm | Weekly |
| sendEmailBudgetReportEOMonth | Time-driven | Month timer - 28th | 6pm to 7pm | Daily |
| sendEmailBudgetReportEOMonth | Time-driven | Month timer - 29th | 6pm to 7pm | Daily |
| sendEmailBudgetReportEOMonth | Time-driven | Month timer - 30th | 6pm to 7pm | Daily |
| sendEmailBudgetReportEOMonth | Time-driven | Month timer - 31st | 6pm to 7pm | Daily |
| warnStatusHalfMonthSpendSnapShot | Time-driven | Month timer - 14th | 4pm to 5pm | Daily |

*\*Day of the month if `Month timer` is selected or Day of Week if `Week timer` is selected* \
*\^Event type if `From spreadsheet` is selected*


<sup><sub>Spreadsheet Name: `Financial Transactions & Budget Tracking - SC (Tiller)`</sup></sub>
