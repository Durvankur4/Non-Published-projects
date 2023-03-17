let markAllAsRead = document.getElementById('mark-all-as-read')




markAllAsRead.addEventListener('click', () => {
    document.querySelectorAll('.red-dot').forEach(e => {
        e.classList.add('hidden')
    })
    document.getElementById('notification-number').innerText = '0'
}
)

