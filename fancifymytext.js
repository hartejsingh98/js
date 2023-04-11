function showAlert() {
    alert("Hello, world!");
}

function changeTextSize() {
    document.getElementById("textArea").style.fontSize = "24pt";
}

function applyStyles() {
    var fancyShmancyRadio = document.getElementById("fancyShmancyRadio");
    var boringBettyRadio = document.getElementById("boringBettyRadio");
    var textArea = document.getElementById("textArea");

    if (fancyShmancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (boringBettyRadio.checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function toUpperCaseAndAddSuffix() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value;
    var sentences = text.split(".");
    var updatedText = "";
    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i].trim();
        if (sentence !== "") {
            var words = sentence.split(" ");
            for (var j = 0; j < words.length; j++) {
                var word = words[j];
                if (word !== "") {
                    if (j === words.length - 1) {
                        updatedText += word.toUpperCase() + "-Moo";
                    } else {
                        updatedText += word.toUpperCase() + " ";
                    }
                }
            }
            updatedText += ". ";
        }
    }
    textArea.value = updatedText;
}
