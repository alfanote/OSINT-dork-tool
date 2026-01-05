// ===========================================================================
// DorkSearch PRO - Enhanced JavaScript
// ===========================================================================

// CONFIGURATION: Google Dorks Database
const dorksData = [
    {
        category: "📂 Files & Documents",
        items: [
            { label: "Public PDFs", dork: "filetype:pdf" },
            { label: "Excel (Tables/Data)", dork: "filetype:xls OR filetype:xlsx OR filetype:csv" },
            { label: "Word Documents", dork: "filetype:doc OR filetype:docx" },
            { label: "Text Files", dork: "filetype:txt OR filetype:rtf OR filetype:md" },
            { label: "PowerPoint Presentations", dork: "filetype:ppt OR filetype:pptx" }
        ]
    },
    {
        category: "⚙️ Server Configuration",
        items: [
            { label: "Directory Traversal", dork: "intitle:\"index of\"" },
            { label: "Config Files", dork: "filetype:xml OR filetype:conf OR filetype:cnf OR filetype:reg OR filetype:inf" },
            { label: "Error Logs", dork: "filetype:log OR filetype:err" },
            { label: "SQL Databases", dork: "filetype:sql OR filetype:dbf OR filetype:mdb" },
            { label: "Apache Config", dork: "filetype:conf inurl:apache" }
        ]
    },
    {
        category: "🔐 Entry Points",
        items: [
            { label: "Admin Panels", dork: "inurl:admin OR inurl:login OR inurl:wp-login" },
            { label: "Exposed .Git Folders", dork: "inurl:/.git" },
            { label: "ENV Files", dork: "filetype:env" },
            { label: "Backups", dork: "filetype:bak OR filetype:old OR filetype:backup" },
            { label: "PHP Config", dork: "inurl:phpinfo.php" }
        ]
    },
    {
        category: "🗄️ Database Files",
        items: [
            { label: "SQL Dumps", dork: "filetype:sql intext:\"INSERT INTO\"" },
            { label: "Database Backups", dork: "filetype:bak intext:database" },
            { label: "SQLite Databases", dork: "filetype:db OR filetype:sqlite" },
            { label: "MongoDB Files", dork: "filetype:json intext:mongodb" }
        ]
    },
    {
        category: "🔑 Credentials & Keys",
        items: [
            { label: "Password Files", dork: "filetype:txt intext:password" },
            { label: "SSH Private Keys", dork: "filetype:pem OR filetype:key" },
            { label: "API Keys", dork: "filetype:env intext:API_KEY" },
            { label: "Configuration Secrets", dork: "intext:\"api_key\" OR intext:\"apikey\"" }
        ]
    }
];

// ===========================================================================
// INITIALIZATION
// ===========================================================================

document.addEventListener('DOMContentLoaded', () => {
    renderButtons();
    setupEventListeners();
    setupAccessibility();
});

// ===========================================================================
// RENDER FUNCTIONS
// ===========================================================================

/**
 * Dynamically generates dork category cards and buttons
 */
function renderButtons() {
    const container = document.getElementById('dorks-container');
    
    if (!container) {
        console.error('Dorks container not found');
        return;
    }
    
    dorksData.forEach(category => {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('role', 'region');
        card.setAttribute('aria-label', category.category);
        
        const title = document.createElement('h3');
        title.textContent = category.category;
        card.appendChild(title);

        category.items.forEach(item => {
            const btn = document.createElement('button');
            btn.textContent = item.label;
            btn.setAttribute('aria-label', `Search for ${item.label}`);
            btn.setAttribute('data-dork', item.dork);
            btn.onclick = () => updateAndSearch(item.dork);
            card.appendChild(btn);
        });

        container.appendChild(card);
    });
}

/**
 * Sets up additional event listeners
 */
function setupEventListeners() {
    const targetInput = document.getElementById('target');
    const customInput = document.getElementById('custom-dork-input');
    
    // Allow Enter key to trigger custom dork
    if (customInput) {
        customInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                runCustomDork();
            }
        });
    }
    
    // Clean domain input on blur
    if (targetInput) {
        targetInput.addEventListener('blur', () => {
            const value = targetInput.value.trim();
            if (value) {
                targetInput.value = cleanDomain(value);
            }
        });
    }
}

/**
 * Improves accessibility for screen readers
 */
function setupAccessibility() {
    // Add live region for screen readers
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'aria-live-region';
    document.body.appendChild(liveRegion);
}

// ===========================================================================
// CORE FUNCTIONALITY
// ===========================================================================

/**
 * Main function: Updates query preview and executes Google search
 * @param {string} dorkQuery - The dork query to execute
 */
function updateAndSearch(dorkQuery) {
    const targetInput = document.getElementById('target');
    let domain = targetInput.value.trim();

    // Validation
    if (!domain) {
        showNotification('⚠️ Error: Please enter a target domain first.', 'error');
        targetInput.focus();
        return;
    }

    // Clean and validate domain
    domain = cleanDomain(domain);
    
    if (!isValidDomain(domain)) {
        showNotification('⚠️ Invalid domain format. Please enter a valid domain (e.g., example.com)', 'error');
        targetInput.focus();
        return;
    }
    
    // Update input with cleaned domain
    targetInput.value = domain;

    // Construct full query
    const fullQuery = `site:${domain} ${dorkQuery}`;

    // Update UI with query preview
    updateQueryPreview(fullQuery);

    // Execute Google search
    executeSearch(fullQuery);
    
    // Announce to screen readers
    announceToScreenReader(`Searching for ${dorkQuery} on ${domain}`);
}

/**
 * Executes custom dork query
 */
function runCustomDork() {
    const customInput = document.getElementById('custom-dork-input');
    const customDork = customInput.value.trim();
    
    if (!customDork) {
        showNotification('Please enter a custom dork query.', 'warning');
        customInput.focus();
        return;
    }

    // If user already included 'site:domain', search directly
    if (customDork.includes('site:')) {
        executeSearch(customDork);
        updateQueryPreview(customDork);
    } else {
        updateAndSearch(customDork);
    }
}

// ===========================================================================
// UTILITY FUNCTIONS
// ===========================================================================

/**
 * Cleans and normalizes domain input
 * @param {string} domain - Raw domain input
 * @returns {string} Cleaned domain
 */
function cleanDomain(domain) {
    // Remove protocol (http://, https://)
    domain = domain.replace(/^(https?:\/\/)?(www\.)?/, '');
    
    // Remove paths and query strings
    domain = domain.replace(/\/.*$/, '');
    
    // Remove trailing dots
    domain = domain.replace(/\.$/, '');
    
    return domain.toLowerCase();
}

/**
 * Validates domain format
 * @param {string} domain - Domain to validate
 * @returns {boolean} True if valid
 */
function isValidDomain(domain) {
    // Basic domain validation regex
    const domainRegex = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,}$/i;
    return domainRegex.test(domain);
}

/**
 * Updates the query preview box
 * @param {string} query - The query to display
 */
function updateQueryPreview(query) {
    const previewBox = document.getElementById('query-preview');
    const queryText = document.getElementById('query-text');
    
    if (!previewBox || !queryText) return;
    
    previewBox.classList.remove('hidden');
    queryText.textContent = query;

    // Setup copy button
    setupCopyButton(query);
}

/**
 * Sets up the copy-to-clipboard functionality
 * @param {string} text - Text to copy
 */
function setupCopyButton(text) {
    const copyBtn = document.getElementById('copy-btn');
    
    if (!copyBtn) return;
    
    copyBtn.onclick = () => {
        navigator.clipboard.writeText(text).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = '✓ Copied!';
            copyBtn.style.backgroundColor = 'var(--accent-green)';
            
            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.style.backgroundColor = '';
            }, 2000);
            
            announceToScreenReader('Query copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy:', err);
            showNotification('Failed to copy to clipboard', 'error');
        });
    };
}

/**
 * Executes Google search in new tab
 * @param {string} query - Search query
 */
function executeSearch(query) {
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    
    // Create a temporary link and click it programmatically
    // This is more reliable than window.open() for avoiding pop-up blockers
    const link = document.createElement('a');
    link.href = googleUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 * Shows notification to user
 * @param {string} message - Notification message
 * @param {string} type - Notification type (error, warning, success)
 */
function showNotification(message, type = 'info') {
    // Use native alert for now (can be enhanced with custom modal)
    alert(message);
    announceToScreenReader(message);
}

/**
 * Announces message to screen readers
 * @param {string} message - Message to announce
 */
function announceToScreenReader(message) {
    const liveRegion = document.getElementById('aria-live-region');
    if (liveRegion) {
        liveRegion.textContent = message;
        // Clear after announcement
        setTimeout(() => {
            liveRegion.textContent = '';
        }, 1000);
    }
}

// ===========================================================================
// EXPORT FOR INLINE USAGE
// ===========================================================================

// Make functions available globally for onclick handlers
window.updateAndSearch = updateAndSearch;
window.runCustomDork = runCustomDork;
