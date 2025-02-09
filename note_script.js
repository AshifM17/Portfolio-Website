
        document.getElementById('noteForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;

            const noteElement = document.createElement('div');
            noteElement.classList.add('bg-white', 'p-4', 'rounded', 'shadow', 'space-y-4');
            noteElement.innerHTML = `
                <h3 class="text-lg font-semibold">${title}</h3>
                <p class="text-gray-700 mt-2">${content}</p>
                <div class="flex justify-end mt-4">
                    <button class="text-red-600 hover:text-red-800"><i class="fas fa-trash-alt"></i> Delete</button>
                </div>
            `;

            document.getElementById('notesList').appendChild(noteElement);

            document.getElementById('title').value = '';
            document.getElementById('content').value = '';
        });

        document.getElementById('notesList').addEventListener('click', function(event) {
            if (event.target.closest('button')) {
                event.target.closest('div.bg-white').remove();
            }
        });
    