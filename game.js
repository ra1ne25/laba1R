// Массив слов и их описаний
const words = [
    { word: 'пример', description: 'Что-то, что служит образцом или моделью для подражания.' },
    { word: 'книга', description: 'Объект, состоящий из набора письменных, печатных или иллюстрированных листов бумаги, скрепленных между собой.' },
    { word: 'река', description: 'Естественный водный поток значительной протяженности, текущий в углубленном русле.' },
    { word: 'ноутбук', description: 'Портативное компьютерное устройство с экраном и клавиатурой.' },
    { word: 'солнце', description: 'Звезда в центре нашей солнечной системы, источник света и тепла для Земли.' },
    { word: 'дерево', description: 'Большое растение с прочным древесным стволом, ветвящимися на определенной высоте от земли.' },
    { word: 'музыка', description: 'Искусство звуков, организованных во времени, которые выражают эмоции и чувства.' },
    { word: 'кофе', description: 'Напиток, приготовленный путем заваривания обжаренного и молотого семени кофейного дерева.' },
    { word: 'интернет', description: 'Глобальная система связанной компьютерной сети, использующая набор протоколов для передачи данных.' },
    { word: 'клавиатура', description: 'Панель клавиш, используемая для ввода данных в компьютер или другое устройство.' },
    { word: 'луна', description: 'Единственный естественный спутник Земли, оказывающий влияние на приливы и отливы.' },
    { word: 'космос', description: 'Бесконечное пространство, которое существует за пределами земной атмосферы.' },
    { word: 'смартфон', description: 'Мобильное устройство, сочетающее функции телефона и компьютера.' },
    { word: 'чай', description: 'Напиток, получаемый путем заливания кипятком листьев чайного куста.' },
    { word: 'море', description: 'Большая соленая водная территория, чаще всего соединенная с океаном.' },
    { word: 'лес', description: 'Большая территория, покрытая густым ростом деревьев и кустарников.' },
    { word: 'песок', description: 'Мелкие частицы минералов или горных пород, чаще всего обнаруживаемые на пляжах и пустынях.' },
    { word: 'офис', description: 'Место работы, где выполняются административные и управленческие функции компании.' },
    { word: 'мост', description: 'Конструкция, позволяющая пересекать реки, долины, дороги или другие препятствия.' },
    { word: 'поезд', description: 'Серия соединенных вагонов, передвигающихся по рельсам для перевозки пассажиров или грузов.' },
    { word: 'снег', description: 'Атмосферные осадки в форме мелких слабоспаянных кристаллов льда.' },
    { word: 'дождь', description: 'Водяные капли, падающие из облаков на землю.' },
    { word: 'сыр', description: 'Продукт питания, получаемый в результате сгущения и последующего брожения молока.' },
    { word: 'игра', description: 'Деятельность с определенными правилами, направленная на развлечение, обучение или упражнения.' },
    { word: 'кино', description: 'Искусство создания и демонстрации движущихся изображений с помощью кинопроекции.' },
    { word: 'цветок', description: 'Репродуктивная структура растения, часто характеризующаяся яркими цветами и ароматами.' },
    { word: 'телефон', description: 'Устройство, используемое для голосовой связи на расстоянии.' },
    { word: 'бумага', description: 'Материал, обычно используемый для письма или печати, изготовленный из волокон целлюлозы.' },
    { word: 'шариковая ручка', description: 'Пишущий инструмент с вращающимся шариком в конце, подающим чернила на бумагу.' },
    { word: 'телевизор', description: 'Электронное устройство для просмотра видео и аудио передач.' },
    { word: 'машина', description: 'Механическое устройство, созданное для выполнения определенной работы или задач.' },
    { word: 'город', description: 'Большое и сложно организованное населенное место со множеством зданий и инфраструктуры.' },
    { word: 'часы', description: 'Устройство для измерения и отображения времени.' },
    { word: 'картина', description: 'Изображение, созданное с помощью живописи, рисования, фотографии и других художественных техник.' },
    { word: 'зеркало', description: 'Обработанная поверхность, способная отражать свет для формирования изображения объектов перед ней.' },
    { word: 'праздник', description: 'Торжественное или значимое событие, часто связанное с отдыхом и весельем.' },
    { word: 'учебник', description: 'Книга или другой ресурс, предназначенный для обучения определенному предмету или навыку.' },
    { word: 'ветер', description: 'Перемещение воздуха от области высокого давления к области низкого давления.' },
    { word: 'врач', description: 'Специалист здравоохранения, обученный диагностировать и лечить болезни и травмы.' },
    { word: 'ресторан', description: 'Место, где люди платят за то, чтобы сесть и поесть приготовленные блюда.' },
    { word: 'школа', description: 'Учреждение, где преподают и учатся, особенно дети и подростки.' },
    { word: 'карта', description: 'Масштабное графическое представление или модель поверхности Земли или ее части.' },
    { word: 'планета', description: 'Небесное тело, вращающееся вокруг звезды или остатка звезды.' },
    { word: 'пиво', description: 'Алкогольный напиток, обычно изготавливаемый путем брожения солода с добавлением хмеля.' }
    // Дополнительные слова и описания
];

let currentWordIndex;
let selectedLetters = '';
let totalScore = 0; // переменная для хранения счета

// Обновление счета
// Обновление и сохранение счета
function updateScore(points) {
    totalScore += points;
    document.getElementById('totalScore').innerText = totalScore;
    saveScore(); // Сохраняем обновленный счет
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('back').addEventListener('click', function () {
        window.location.href = 'index.html'; // Переход на главную страницу
    });
});


// Инициализация игры
function initializeGame() {
    // Сброс предыдущего слова
    selectedLetters = '';

    const savedScore = localStorage.getItem('totalScore');
    if (savedScore) {
        totalScore = parseInt(savedScore);
        document.getElementById('totalScore').innerText = totalScore;
    }

    // Чтение номера раунда из localStorage и преобразование его в число
    const roundNumber = parseInt(localStorage.getItem('selectedRound'), 10);

    // Проверка на наличие номера раунда и его корректность
    if (isNaN(roundNumber) || roundNumber < 1 || roundNumber > words.length) {
        console.error('Invalid round number.');
        // Здесь мог бы быть код для обработки ошибки или показа сообщения пользователю 
        return;
    }

    // Настройка текущего индекса слова на основе номера раунда (номера раундов начинаются с 1)
    currentWordIndex = roundNumber - 1;
    const currentWord = words[currentWordIndex].word;
    const currentDescription = words[currentWordIndex].description;

    // Отображение описания слова
    document.getElementById('description').innerText = currentDescription;

    // Очистка предыдущих слотов для слов
    const wordSlots = document.getElementById('wordSlots');
    wordSlots.innerHTML = '';

    // Создание и отображение пустых слотов для нового слова
    for (let i = 0; i < currentWord.length; i++) {
        wordSlots.innerHTML += '<span class="blank">_</span>';
    }

    // Отображение букв для выбора из текущего слова
    const lettersContainer = document.getElementById('letters');
    lettersContainer.innerHTML = '';

    // Перемешивание букв слова
    let letters = shuffleLetters(currentWord);
    letters.forEach(letter => {
        // Создание кнопки для каждой буквы
        let button = document.createElement('button');
        button.classList.add('letter-btn', 'btn', 'btn-primary', 'm-1');
        button.innerText = letter;
        button.addEventListener('click', () => selectLetter(letter, button));
        // Добавление кнопки в DOM
        lettersContainer.appendChild(button);
    });
}



function startGame() {
    // Вы можете добавить здесь логику для показа страницы с выбором раундов.
    // Предположим, что у нас есть 5 раундов для выбора.
    let roundSelectionHTML = '<h2>Выберите раунд:</h2>';
    for (let i = 1; i <= 5; i++) {
        roundSelectionHTML += `<button onclick="startRound(${i})" class="btn btn-secondary m-2">Раунд ${i}</button>`;
    }

    // Див для выбора раунда, скрытый по умолчанию.
    document.getElementById('gameContainer').innerHTML = roundSelectionHTML;
    document.getElementById('gameContainer').classList.remove('d-none');
}

function startRound(roundNumber) {
    // Логика для начала определенного раунда
    // Эта функция пока пуста, замените ее на реальный код, который начинает раунд.
    console.log('Начало раунда: ', roundNumber);
    // Здесь будет код для инициализации раунда игры
}


// Перемешивание букв слова
function shuffleLetters(word) {
    let lettersArray = word.split('');
    for (let i = lettersArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [lettersArray[i], lettersArray[j]] = [lettersArray[j], lettersArray[i]];
    }
    return lettersArray;
}

// Выбор буквы
// Выбор буквы
function selectLetter(letter, button) {
    const currentWord = words[currentWordIndex].word;

    let letterCountInWord = currentWord.split(letter).length - 1;
    let letterCountInSelection = selectedLetters.split(letter).length - 1;

    if (letterCountInSelection < letterCountInWord) {
        selectedLetters += letter;
        button.disabled = true; // Отключаем кнопку, чтобы избежать сбоя UI
        updateSlots();
    } else {
        button.disabled = true; // Если буква уже выбрана максимальное количество раз, отключаем её
    }

    if (selectedLetters.length === currentWord.length) {
        checkWord();
    }
}

// Обновление состояния слотов для букв
function updateSlots() {
    const slots = document.getElementById('wordSlots').children;
    for (let i = 0; i < slots.length; i++) {
        if (selectedLetters[i]) {
            slots[i].innerText = selectedLetters[i];
            slots[i].style.cursor = 'pointer'; // Стиль курсора для подсказки кликабельности
            slots[i].onclick = function () {
                removeLetter(i); // Удаление буквы по индексу
            };
        } else {
            slots[i].innerText = '_';
            slots[i].style.cursor = 'default';
            slots[i].onclick = null;
        }
    }
}

function removeLetter(index) {
    // Получаем доступ к слотам и кнопкам с буквами
    const slots = document.getElementById('wordSlots').children;
    const lettersContainer = document.getElementById('letters');

    // Определяем букву для повторного использования
    const letterToEnable = selectedLetters[index];

    // Возвращаем букву в массив доступных для выбора букв
    selectedLetters = selectedLetters.substring(0, index) + selectedLetters.substring(index + 1);

    // Теперь устанавливаем слот, из которого была удалена буква, в состояние "_"
    slots[index].innerText = "_";

    // Поиск и включение соответствующей кнопки буквы
    const letterButtons = lettersContainer.getElementsByClassName('letter-btn');
    for (let button of letterButtons) {
        if (button.innerText === letterToEnable && button.disabled) {
            button.disabled = false;
            break;
        }
    }

    // Обновляем слоты, чтобы отобразить изменения
    updateSlots();
}

// Проверка слова
// Проверка слова и переход к следующему раунду
function checkWord() {
    if (selectedLetters === words[currentWordIndex].word) {
        updateScore(10); // Правильное слово добавляет 10 очков
        alert('Вы угадали! Слово: ' + selectedLetters);

        // Устанавливаем и сохраняем номер следующего раунда
        const nextRoundNumber = currentWordIndex + 2; // "+ 2" потому что массив начинается с 0, а раунды с 1
        localStorage.setItem('selectedRound', String(nextRoundNumber));

        // Проверяем, что следующий раунд не выходит за границы массива
        if (nextRoundNumber <= words.length) {
            initializeGame(); // Запуск следующего раунда
        } else {
            alert('Вы прошли все раунды! Ваш итоговый счёт: ' + totalScore);
            // Здесь код для перезапуска игры с первого раунда или завершения игры
        }
    } else {
        updateScore(-5); // Неправильное слово вычитает 5 очков
        alert('Попробуйте еще раз.');
        initializeGame(); // Повторить раунд
    }
}

// Функция подсказки, которая открывает следующую неоткрытую букву в слове
function useHint() {
    if (totalScore >= 5) { // Стоимость подсказки – 5 баллов
        const slots = document.getElementById('wordSlots').children;
        const currentWord = words[currentWordIndex].word;
        for (let i = 0; i < slots.length; i++) {
            if (slots[i].innerText === "_") {
                slots[i].innerText = currentWord[i];
                selectedLetters += currentWord[i]; // Добавляем букву в выбранные
                updateScore(-5); // Отнимаем баллы за использование подсказки
                break;
            }
        }
    } else {
        alert("Недостаточно баллов для использования подсказки!");
    }
}

// Сохранить счет в localStorage
function saveScore() {
    localStorage.setItem('totalScore', totalScore);
}



// Запуск игры при полной загрузке страницы
window.onload = initializeGame;
