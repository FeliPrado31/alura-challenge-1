const textArea = document.getElementById('text-input');
const encryptedTextArea = document.getElementById('encrypted-text-area');
const encryptedMessage = document.getElementById('encrypted-message');
const emptyMessage = document.getElementById('empty-message');
const eEncryptedLetter = "enter";
const iEncryptedLetter = "imes";
const aEncryptedLetter = "ai";
const oEncryptedLetter = "ober";
const uEncryptedLetter = "ufat";

document.getElementById('encrypt').addEventListener('click', function () {
    const text = textArea.value;
    if (!/^[a-z]+$/.test(text)) {
        alert("El texto debe contener solo letras minúsculas y sin acentos.");
        return;
    }
    emptyMessage.style.display = 'none';
    encryptedMessage.style.display = 'flex';
    encryptedTextArea.value = encryptText(text);
});

document.getElementById('decrypt').addEventListener('click', function () {
    const text = textArea.value;
    console.log("Press");
    encryptedTextArea.value = decryptText(text);
});

document.getElementById('copy').addEventListener('click', function () {
    const copyTextEncrypted = encryptedTextArea.value;
    navigator.clipboard.writeText(copyTextEncrypted).then(function () {
        console.log('Texto copiado al portapapeles: ', copyTextEncrypted);
    }, function (err) {
        console.error('Error al copiar el texto: ', err);
    });
});

const encryptText = (text) => {
    text = text.replace(/e/g, eEncryptedLetter);
    text = text.replace(/i/g, iEncryptedLetter);
    text = text.replace(/a/g, aEncryptedLetter);
    text = text.replace(/o/g, oEncryptedLetter);
    text = text.replace(/u/g, uEncryptedLetter);
    return text;
};

const decryptText = (text) => {
    text = text.replace(/enter/g, "e");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ai/g, "a");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");
    return text;
};
