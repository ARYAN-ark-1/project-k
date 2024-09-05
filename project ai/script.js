function toggleSidebar() {
    const sidebar = document.getElementById('chat-sidebar');
    const container1 = document.querySelector('.container1');
    const container2 = document.querySelector('.container2');

    if (sidebar.style.width === '10%') {
        sidebar.style.width = '0';
        container1.style.width = '50%';
        container2.style.width = '50%'; /* Ensure container2 retains its width */
    } else {
        sidebar.style.width = '10%';
        container1.style.width = '40%'; /* Adjust container1 width when sidebar is open */
        container2.style.width = '40%'; /* Ensure container2 retains its width */
    }
}
