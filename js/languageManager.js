let userLang = localStorage.getItem("userLang") || GetValidLanguage("en");

function GetValidLanguage(langRequest)
{
    const shortLang = langRequest.substring(0, 2);

    switch (shortLang) {
        case "pl":
        case "en":
            return shortLang;
        default: 
            return "en";
    }
}

function SwitchLanguage(langRequest) {
    const lang = GetValidLanguage(langRequest);

    localStorage.setItem("userLang", lang);
    userLang = lang;

    UpdateLocalizer();
    ReplaceLocalizedStrings();
}