// JavaScript code for Raw Material Inventory Management Web Application

var jpdbBaseUrl = "http://api.login2explore.com:5577/";
var connToken = "90934453|-31949228894225359|90956963";
var invDBName = "Inventory-DB";
var invRelationName = "RawMaterials";

setBaseUrl(jpdbBaseUrl);

// Event listeners for navigation menu
function navigateTo(page) {
    const pages = ['itemManagement', 'itemReceived', 'itemIssued', 'itemReport'];
    pages.forEach(p => document.getElementById(p).style.display = 'none');
    document.getElementById(page).style.display = 'block';
}

document.getElementById('menuItemManagement').addEventListener('click', () => navigateTo('itemManagement'));
document.getElementById('menuItemReceived').addEventListener('click', () => navigateTo('itemReceived'));
document.getElementById('menuItemIssued').addEventListener('click', () => navigateTo('itemIssued'));
document.getElementById('menuItemReport').addEventListener('click', () => navigateTo('itemReport'));

// Utility functions
function getItemDetailsAsJson() {
    const itemId = document.getElementById('itemId').value.trim();
    const itemName = document.getElementById('itemName').value.trim();
    const openingStock = parseFloat(document.getElementById('openingStock').value);
    const uom = document.getElementById('uom').value.trim();

    if (!itemId || !itemName || isNaN(openingStock) || !uom) {
        alert('All fields are required, and Opening Stock must be a valid number.');
        return "";
    }

    return JSON.stringify({
        id: itemId,
        name: itemName,
        stock: openingStock,
        uom: uom
    });
}

function validateAndSubmitItemForm() {
    const jsonStr = getItemDetailsAsJson();
    if (jsonStr === "") return;

    const putRequest = createPUTRequest(connToken, jsonStr, invDBName, invRelationName);
    jQuery.ajaxSetup({ async: false });
    const result = executeCommandAtGivenBaseUrl(putRequest, jpdbBaseUrl, "/api/iml");
    jQuery.ajaxSetup({ async: true });
    console.log('Item saved:', result);
    alert('Item details saved successfully!');
}

document.getElementById('saveItemBtn').addEventListener('click', validateAndSubmitItemForm);

function loadItemDetails() {
    const itemId = document.getElementById('itemId').value.trim();
    if (!itemId) {
        alert('Item ID is required to load details.');
        return;
    }

    const getRequest = createGET_BY_KEYRequest(connToken, invDBName, invRelationName, JSON.stringify({ id: itemId }));
    jQuery.ajaxSetup({ async: false });
    const result = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseUrl, "/api/irl");
    jQuery.ajaxSetup({ async: true });

    if (result.status === 400) {
        alert('No item found with the given ID.');
        return;
    }

    const data = JSON.parse(result.data).record;
    document.getElementById('itemName').value = data.name;
    document.getElementById('openingStock').value = data.stock;
    document.getElementById('uom').value = data.uom;
    alert('Item details loaded successfully!');
}

document.getElementById('loadItemBtn').addEventListener('click', loadItemDetails);

// Handle Item Received Form
function validateAndSubmitItemReceivedForm() {
    const receiptNo = document.getElementById('receiptNo').value.trim();
    const receiptDate = document.getElementById('receiptDate').value;
    const itemId = document.getElementById('itemReceivedId').value.trim();
    const qtyReceived = parseFloat(document.getElementById('qtyReceived').value);

    if (!receiptNo || !receiptDate || !itemId || isNaN(qtyReceived) || qtyReceived <= 0) {
        alert('All fields are required, and Quantity Received must be a valid number greater than 0.');
        return;
    }

    const jsonStr = JSON.stringify({
        receiptNo: receiptNo,
        date: receiptDate,
        itemId: itemId,
        qty: qtyReceived
    });

    const putRequest = createPUTRequest(connToken, jsonStr, invDBName, "ItemReceived");
    jQuery.ajaxSetup({ async: false });
    const result = executeCommandAtGivenBaseUrl(putRequest, jpdbBaseUrl, "/api/iml");
    jQuery.ajaxSetup({ async: true });

    console.log('Item received saved:', result);
    alert('Item received details saved successfully!');
}

document.getElementById('saveReceivedBtn').addEventListener('click', validateAndSubmitItemReceivedForm);

// Generate Report
function generateReport() {
    const itemRangeStart = document.getElementById('itemRangeStart').value.trim();
    const itemRangeEnd = document.getElementById('itemRangeEnd').value.trim();

    if (!itemRangeStart || !itemRangeEnd) {
        alert('Please specify a valid range of Item IDs.');
        return;
    }

    const reportRequest = createRANGE_RECORDRequest(connToken, invDBName, invRelationName, itemRangeStart, itemRangeEnd);
    jQuery.ajaxSetup({ async: false });
    const result = executeCommandAtGivenBaseUrl(reportRequest, jpdbBaseUrl, "/api/irl");
    jQuery.ajaxSetup({ async: true });

    console.log('Report generated:', result);
    alert('Report generated successfully! Check the console for details.');
}

document.getElementById('generateReportBtn').addEventListener('click', generateReport);

// Initialize the form
navigateTo('itemManagement');
