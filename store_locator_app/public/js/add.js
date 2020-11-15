
const storeForm = document.getElementById('form');
const storeId = document.getElementById('storeId');
const address = document.getElementById('address');
const button = document.getElementById('btn-sub');
const loadDiv = document.getElementById('load-div');


button.addEventListener('click', function() {
    button.classList.add('hide');
    loadDiv.classList.add('show');

    setTimeout(() => {
        button.classList.remove('hide');
        loadDiv.classList.remove('show');
    }, 9000)
})

document.addEventListener('submit', submitStore);

async function submitStore(e) {
    e.preventDefault();

    if(storeId.value == '' || address.value == '') {
        alert('please fill in all the fields');
        window.location.href = '/add.html'
        return;
    }

    const newStore = {
        storeId: storeId.value,
        address: address.value
    }

    try {
        const res = await fetch('/api/v1/stores', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newStore)
        });

        if (res.status === 400) throw Error('user Already Exist');

        alert('Store Added');
        window.location.href = '/index.html'
    } catch (err) {
        alert(err);
        return;
    }

}

