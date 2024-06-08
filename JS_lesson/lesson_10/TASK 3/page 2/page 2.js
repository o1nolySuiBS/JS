const session = localStorage.getItem('session');
const data = session ? JSON.parse(session): [];

for (const item of data) {
    const block = document.createElement('div');
    block.innerText = item.data;
    document.body.appendChild(block)
}

