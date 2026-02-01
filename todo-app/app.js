function addTask() {
    const taskInput = document.getElementById('taskInput');
    const timeInput = document.getElementById('timeInput');
    const taskText = taskInput.value.trim();
    const reminderTime = timeInput.value;

    if (taskText === "") {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Complete button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '✅';
    completeButton.onclick = () => {
        taskSpan.classList.toggle('completed');
    };

    // Remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.onclick = () => {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(completeButton);
    listItem.appendChild(taskSpan);
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // 🔔 REMINDER LOGIC
    if (reminderTime) {
        setReminder(taskText, reminderTime);
    }

    taskInput.value = '';
    timeInput.value = '';
}
function setReminder(taskText, time) {
    const now = new Date();
    const [hours, minutes] = time.split(':');

    const reminderDate = new Date();
    reminderDate.setHours(hours, minutes, 0, 0);

    const timeDifference = reminderDate - now;

    if (timeDifference > 0) {
        setTimeout(() => {
            document.getElementById('reminderSound').play();
            alert(`⏰ Reminder: ${taskText}`);
        }, timeDifference);
    }
}
