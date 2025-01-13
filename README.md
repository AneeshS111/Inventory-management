# Raw-Material-Inventory-Management
**Requirement:** A Web Application that will manage the inventory of raw material for a given manufacturing unit. The application must provide easy navigation, addition, modification & updation of data for proper management of raw material in the store.

**Database schema**
- ITEMS {ItemID (PK), ItemName, OpeningStock, ItemsReceived, ItemsIssued, UoM}
- INWARD {ReceiptNo (PK), ReceiptDate, ItemID (FK), QtyReceived}
- OUTWARD {IssueNo (PK), IssueDate, ItemID (FK), QtyIssued}

# Pages
**1. Item Management Page:** A form to add new items in the stock or to edit the item details. The form will contain the following fields to be entered by the user & validations as required on different fields:
- Item ID - Allow the user to enter Item ID and check whether this item exists in the database. If it exists, it will load the item's details from the database and display the required information on this page, if the Item ID is not present it will ask for other details of this new item to be created.
- Item Name - Name of the Raw Material.
- Opening Stock - Numeric 15 total with 3 decimal places.
- Unit of Measurement - Allow 10 characters.

**2.  Item Received (Inward) Page:** This is a form for managing items received in the store. The form will contain the following fields to be entered by the user and full navigation and control buttons also should have validations and updates as required on different fields:
- Receipt No - If the entered item receipt number exists, it will load the details from the database and display the required information for further actions using control buttons and navigation buttons. If the receipt number is not present it will ask the user to enter further details.
- Receipt Date - Date of receipt to be entered.
- Item ID - Item ID to be entered and it must exist in the ITEMS relation and display the item name in front of entered Item ID. If the Item is not present It must display an error 'Item not present' and keep the cursor on the Item ID field.
- Quantity - User is required to enter the Item received.

**3.  Item Issue (Outward) Page:** This is a form for managing items issued from the store for manufacturing. The form will containg following fields to be entered by user and full navigation and control buttons also should have validations and updates as required on different fields:
- Issue No - If the entered item issue number exists, it will load the details from the database and display the required information for further actions using control buttons and navigation buttons. If not present it will ask the user to enter further details.
- Issue Date - Date of receipt to be entered.
- Item ID - Item ID to be entered and it must exist in the ITEMS relation and display the item name in front of the entered Item ID. If the Item is not present It must display an error 'Item not present' and keep the cursor on the Item ID field.
- Quantity - User is required to enter the Item issue. It must display an error message 'Quantity entered is more than available' and the cursor will remain in the quantity field.
**4. Item Report Page:** This page will display the list of items in tabular form for a given range of Item IDs. The report should have a minimum of columns (1) Item ID, (2) Item Name and (3) Current Stock.

# Links
- Home page: https://login2explore.com
- Register to use JsonPowerDB: http://api.login2explore.com
- JsonPowerDB Help: https://login2explore.com/jpdb/docs.html

