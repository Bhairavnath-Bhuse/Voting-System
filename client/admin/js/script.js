function loadDashboard(page) {
    fetch(`././components/Dashboard/${page}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
        })
        .catch(err => {
            document.getElementById('main-content').innerHTML = '<p class="text-danger">Failed to load content.</p>';
        });
}

function loadPageNavbar(page) {
    fetch(`./components/Navbar/${page}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
        })
        .catch(err => {
            console.log("Error occur while loading Navbar")
            // document.getElementById('main-content').innerHTML = '<p class="text-danger">Failed to load content.</p>';
        });
}


function loadPageComponents(filename, targetId = 'main-content') {
    fetch(`./components/${filename}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById(targetId).innerHTML = data;
        })
        .catch(err => {
            console.error("Failed to load:", filename, err);
            document.getElementById(targetId).innerHTML = '<p class="text-danger">Failed to load content.</p>';
        });
}
