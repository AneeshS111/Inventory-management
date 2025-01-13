var jpdbBaseUrl = "http://api.login2explore.com:5577/";
var connToken = "90934453|-31949228894225359|90956963";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml";
var empDBName = "Inv-Mgmt";
var empRelationName = "Inventory";
function navigateTo(page) {
    const pages = ['itemManagement', 'itemReceived', 'itemIssued', 'itemReport'];
    pages.forEach(p => document.getElementById(p).style.display = 'none');
    document.getElementById(page).style.display = 'block';
}

document.getElementById('menuItemManagement').addEventListener('click', () => navigateTo('itemManagement'));
document.getElementById('menuItemReceived').addEventListener('click', () => navigateTo('itemReceived'));
document.getElementById('menuItemIssued').addEventListener('click', () => navigateTo('itemIssued'));
document.getElementById('menuItemReport').addEventListener('click', () => navigateTo('itemReport'));

// Form validation and submission for Item Management Page
function validateItemManagementForm() {
    const itemId = document.getElementById('itemId').value.trim();
    const itemName = document.getElementById('itemName').value.trim();
    const openingStock = parseFloat(document.getElementById('openingStock').value);
    const uom = document.getElementById('uom').value.trim();

    if (!itemId) {
        alert('Item ID is required.');
        return false;
    }
    if (!itemName) {
        alert('Item Name is required.');
        return false;
    }
    if (isNaN(openingStock) || openingStock < 0) {
        alert('Opening Stock must be a valid number greater than or equal to 0.');
        return false;
    }
    if (!uom) {
        alert('Unit of Measurement (UoM) is required.');
        return false;
    }

    // Submit form (simulate API call)
    console.log('Submitting Item Management form:', { itemId, itemName, openingStock, uom });
    alert('Item details saved successfully!');
    return true;
}

document.getElementById('saveItemBtn').addEventListener('click', validateItemManagementForm);

// Form validation and submission for Item Received Page
function validateItemReceivedForm() {
    const receiptNo = document.getElementById('receiptNo').value.trim();
    const receiptDate = document.getElementById('receiptDate').value;
    const itemId = document.getElementById('itemReceivedId').value.trim();
    const qtyReceived = parseFloat(document.getElementById('qtyReceived').value);

    if (!receiptNo) {
        alert('Receipt No is required.');
        return false;
    }
    if (!receiptDate) {
        alert('Receipt Date is required.');
        return false;
    }
    if (!itemId) {
        alert('Item ID is required.');
        return false;
    }
    if (isNaN(qtyReceived) || qtyReceived <= 0) {
        alert('Quantity Received must be a valid number greater than 0.');
        return false;
    }

    // Simulate API call
    console.log('Submitting Item Received form:', { receiptNo, receiptDate, itemId, qtyReceived });
    alert('Item received details saved successfully!');
    return true;
}

document.getElementById('saveReceivedBtn').addEventListener('click', validateItemReceivedForm);

// Form validation and submission for Item Issued Page
function validateItemIssuedForm() {
    const issueNo = document.getElementById('issueNo').value.trim();
    const issueDate = document.getElementById('issueDate').value;
    const itemId = document.getElementById('itemIssuedId').value.trim();
    const qtyIssued = parseFloat(document.getElementById('qtyIssued').value);

    if (!issueNo) {
        alert('Issue No is required.');
        return false;
    }
    if (!issueDate) {
        alert('Issue Date is required.');
        return false;
    }
    if (!itemId) {
        alert('Item ID is required.');
        return false;
    }
    if (isNaN(qtyIssued) || qtyIssued <= 0) {
        alert('Quantity Issued must be a valid number greater than 0.');
        return false;
    }

    // Simulate API call
    console.log('Submitting Item Issued form:', { issueNo, issueDate, itemId, qtyIssued });
    alert('Item issued details saved successfully!');
    return true;
}

document.getElementById('saveIssuedBtn').addEventListener('click', validateItemIssuedForm);

// Generate Item Report
function generateReport() {
    const itemRangeStart = document.getElementById('itemRangeStart').value.trim();
    const itemRangeEnd = document.getElementById('itemRangeEnd').value.trim();

    if (!itemRangeStart || !itemRangeEnd) {
        alert('Please specify a valid range of Item IDs.');
        return;
    }

    // Simulate API call and display report
    console.log('Generating report for items:', { itemRangeStart, itemRangeEnd });
    alert('Report generated successfully!');
    // Example: Populate report table dynamically
}

document.getElementById('generateReportBtn').addEventListener('click', generateReport);
