function ReplaceLocalizedStrings()
{
    const elements = [...document.querySelectorAll("*[data-localizer]")];

    for (const elem of elements) {
        const localizerKey = elem.getAttribute("data-localizer")

		const text = Localizer[localizerKey]
		if (text) {
			elem.innerHTML = text
		}
    }

    const langSwitcherIcon = document.querySelector("#lang-switcher");

    langSwitcherIcon.classList.remove("lang-pl")
    langSwitcherIcon.classList.remove("lang-en")

    langSwitcherIcon.classList.add(`lang-${userLang}`)
}

function UpdateLocalizer() {
    switch (userLang) {
        case "pl": Localizer = LocalizedStrings_pl; break;
        case "en": Localizer = LocalizedStrings_en; break;
    }
}

let Localizer = new Map();

UpdateLocalizer()
ReplaceLocalizedStrings();