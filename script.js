// CONFIGURATION: List of Dorks
// You can add more objects to this array to expand the tool
const dorksData = [
    {
        category: "📂 Files & Documents",
        items: [
            { label: "Public PDFs", dork: "filetype:pdf" },
            { label: "Excel (Tables/Data)", dork: "filetype:xls OR filetype:xlsx OR filetype:csv" },
            { label: "Word Documents", dork: "filetype:doc OR filetype:docx" },
            { label: "Text Files", dork: "filetype:txt OR filetype:rtf OR filetype:md" }
        ]
    },
    {
        category: "⚙️ Server Configuration",
        items: [
            { label: "Directory Traversal", dork: "intitle:\"index of\"" },
            { label: "Config Files", dork: "filetype:xml OR filetype:conf OR filetype:cnf OR filetype:reg OR filetype:inf" },
            { label: "Error Logs", dork: "filetype:log OR filetype:err" },
            { label: "SQL Databases", dork: "filetype:sql OR filetype:dbf OR filetype:mdb" }
        ]
    },
    {
        category: "🔐 Entry Points",
        items: [
            { label: "Admin Panels", dork: "inurl:admin OR inurl:login OR inurl:wp-login" },
            { label: "Exposed .Git Folders", dork: "inurl:/.git" },
            { label: "ENV Files", dork: "filetype:env" },
            { label: "Backups", dork: "filetype:bak OR filetype:old OR filetype:backup" }
        ]
    }
];

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    renderButtons();
});

// Dynamically render buttons based on dorksData
function renderButtons() {
    const container = document.getElementById('dorks-container');
    
    dorksData.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const title = document.createElement('h3');
        title.innerText = cat.category;
        card.appendChild(title);

        cat.items.forEach(item => {
            const btn = document.createElement('button');
            btn.innerText = item.label;
            btn.setAttribute('aria-label', `Search for ${item.label}`);
            btn.onclick = () => updateAndSearch(item.dork);
            card.appendChild(btn);
        });

        container.appendChild(card);
    });
}

// Main Logic
function updateAndSearch(dorkQuery) {
    let domain = document.getElementById('target').value;

    // 1. Validation and Cleaning
    if (!domain) {
        alert("⚠️ Error: Please enter a target domain first.");
        document.getElementById('target').focus();
        return;
    }

    // Regex to clean http, www and paths
    domain = domain.replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/.*$/, '');
    
    // Update input with clean domain (UX)
    document.getElementById('target').value = domain;

    // 2. Query Construction
    const fullQuery = `site:${domain} ${dorkQuery}`;

    // 3. UI Update (Show query)
    const previewBox = document.getElementById('query-preview');
    const queryText = document.getElementById('query-text');
    
    previewBox.classList.remove('hidden');
    queryText.innerText = fullQuery;

    // Copy button setup
    const copyBtn = document.getElementById('copy-btn');
    copyBtn.onclick = () => {
        navigator.clipboard.writeText(fullQuery).then(() => {
            const originalText = copyBtn.innerText;
            copyBtn.innerText = "Copied!";
            setTimeout(() => copyBtn.innerText = originalText, 1500);
        });
    };

    // 4. Execute search
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(fullQuery)}`;
    window.open(googleUrl, '_blank');
}

// Custom Dork Logic
function runCustomDork() {
    const customDork = document.getElementById('custom-dork-input').value;
    if(customDork) {
        // If user already wrote 'site:domain', don't duplicate it, just search directly
        if (customDork.includes('site:')) {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(customDork)}`, '_blank');
        } else {
            updateAndSearch(customDork);
        }
    } else {
        alert("Please enter a custom dork.");
    }
}
