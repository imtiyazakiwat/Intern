let assets = [
    { _id: "ASST121", tag: "ASSTEXCL123", serialNo:"92198765", model: "DELL5000", requestNo: "REQ123", attStatus: "", certify: "Yes" },
    { _id: "ASST122", tag: "ASSTEXCL123", serialNo:"92198765", model: "DELL5000", requestNo: "REQ123", attStatus: "", certify: "Yes" },
    { _id: "ASST123", tag: "ASSTEXCL123", serialNo:"92198765", model: "DELL5000", requestNo: "REQ123", attStatus: "", certify: "Yes" },
    { _id: "ASST124", tag: "ASSTEXCL123", serialNo:"92198765", model: "DELL5000", requestNo: "REQ123", attStatus: "", certify: "Yes" }
];

function displayAssets() {
    const table = document.getElementById('assetTblId');
    table.innerHTML = '';
    assets.forEach((asset, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${asset._id}</td>
                         <td><button class="action-btn" onclick="showForm('view', ${index})"><i class="fas fa-eye"></i></button></td>
                         <td>${asset.tag}</td>
                         <td>${asset.serialNo}</td>
                         <td>${asset.model}</td>
                         <td>${asset.requestNo}</td>
                         <td>${asset.attStatus}</td>
                         <td>Attested Date</td>
                         <td>${asset.certify}</td>
                         <td>
                             <button class="action-btn" onclick="showForm('edit', ${index})"><i class="fas fa-edit"></i></button>
                             <button class="action-btn" onclick="deleteAsset(${index})"><i class="fas fa-trash-alt"></i></button>
                         </td>`;
        table.appendChild(row);
    });
}

function showForm(type, index = null) {
    const modal = document.getElementById('myModal');
    const formType = document.getElementById('formType');
    const assetIndex = document.getElementById('assetIndex');
    formType.value = type;
    assetIndex.value = index;

    if (type === 'create') {
        document.getElementById('assetId').value = '';
        document.getElementById('assetTag').value = '';
        document.getElementById('serialNo').value = '';
        document.getElementById('model').value = '';
        document.getElementById('requestNo').value = '';
        document.getElementById('attStatus').value = '';
        document.getElementById('certify').value = '';
    } else if (type === 'edit' || type === 'view') {
        const asset = assets[index];
        document.getElementById('assetId').value = asset._id;
        document.getElementById('assetTag').value = asset.tag;
        document.getElementById('serialNo').value = asset.serialNo;
        document.getElementById('model').value = asset.model;
        document.getElementById('requestNo').value = asset.requestNo;
        document.getElementById('attStatus').value = asset.attStatus;
        document.getElementById('certify').value = asset.certify;
        if (type === 'view') {
            disableForm(true);
        } else {
            disableForm(false);
        }
    }

    modal.style.display = 'block';
}

function disableForm(disabled) {
    document.getElementById('assetId').disabled = disabled;
    document.getElementById('assetTag').disabled = disabled;
    document.getElementById('serialNo').disabled = disabled;
    document.getElementById('model').disabled = disabled;
    document.getElementById('requestNo').disabled = disabled;
    document.getElementById('attStatus').disabled = disabled;
    document.getElementById('certify').disabled = disabled;
    document.querySelector('.form-container button').style.display = disabled ? 'none' : 'block';
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function saveAsset() {
    const formType = document.getElementById('formType').value;
    const index = document.getElementById('assetIndex').value;

    const newAsset = {
        _id: document.getElementById('assetId').value,
        tag: document.getElementById('assetTag').value,
        serialNo: document.getElementById('serialNo').value,
        model: document.getElementById('model').value,
        requestNo: document.getElementById('requestNo').value,
        attStatus: document.getElementById('attStatus').value,
        certify: document.getElementById('certify').value
    };

    if (formType === 'create') {
        assets.push(newAsset);
    } else if (formType === 'edit') {
        assets[index] = newAsset;
    }

    displayAssets();
    closeModal();
}

function deleteAsset(index) {
    if (confirm("Are you sure you want to delete this asset?")) {
        assets.splice(index, 1);
        displayAssets();
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal();
    }
}

window.onload = displayAssets;