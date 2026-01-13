/* =========================================
   DATABASE: DORK CATEGORIES (FULL RESTORED)
   ========================================= */
const dorksData = [
  {
    category: "Files & Documents",
    icon: "fa-file-alt",
    items: [
      { label: "Public PDFs", dork: "filetype:pdf" },
      { label: "Excel Data", dork: "filetype:xls OR filetype:xlsx OR filetype:csv" },
      { label: "Word Docs", dork: "filetype:doc OR filetype:docx" },
      { label: "Text / Notes", dork: "filetype:txt OR filetype:rtf OR filetype:md" },
      { label: "Presentations", dork: "filetype:ppt OR filetype:pptx" },
      { label: "Spreadsheets (ODS)", dork: "filetype:ods" },
      { label: "Archives", dork: "filetype:zip OR filetype:rar OR filetype:tar OR filetype:gz" }
    ]
  },
  {
    category: "Server & Config",
    icon: "fa-server",
    items: [
      { label: "Directory Listing", dork: "intitle:\"index of\"" },
      { label: "Config Files", dork: "filetype:xml OR filetype:conf OR filetype:cnf OR filetype:ini OR filetype:env" },
      { label: "Log Files", dork: "filetype:log OR filetype:err" },
      { label: "Apache / Nginx Status", dork: "inurl:server-status OR intitle:\"nginx status\"" },
      { label: "PHP Info", dork: "inurl:phpinfo.php OR intitle:phpinfo" },
      { label: "Docker Configs", dork: "filename:docker-compose OR filetype:yml intext:docker" },
      { label: "Kubernetes Configs", dork: "filetype:yaml intext:apiVersion" }
    ]
  },
  {
    category: "Bug Bounty & Vulnerabilities",
    icon: "fa-bug",
    items: [
      { label: "Open Redirect", dork: "inurl:redir OR inurl:redirect= OR inurl:return= OR inurl:next=" },
      { label: "XSS Parameters", dork: "inurl:q= OR inurl:search= OR inurl:s= OR inurl:lang=" },
      { label: "SQL Injection Params", dork: "inurl:id= OR inurl:cat= OR inurl:pid= OR inurl:sid=" },
      { label: "File Upload Forms", dork: "inurl:upload OR inurl:uploader" },
      { label: "Admin Panels", dork: "inurl:admin OR inurl:login OR inurl:dashboard" },
      { label: "SQL Errors", dork: "intext:\"sql syntax\" OR intext:\"mysql_fetch\" OR intext:\"Fatal error\"" },
      { label: "LFI / RFI", dork: "inurl:file= OR inurl:path= OR inurl:include=" },
      { label: "XXE Targets", dork: "filetype:xml intext:DOCTYPE" }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: "fa-cloud",
    items: [
      { label: "AWS S3 Buckets", dork: "intext:\"s3.amazonaws.com\"" },
      { label: "Azure Blob Storage", dork: "inurl:blob.core.windows.net" },
      { label: "Google Cloud Storage", dork: "inurl:storage.googleapis.com" },
      { label: "Git Repositories", dork: "inurl:/.git OR inurl:.git/config" },
      { label: "Environment Files", dork: "filename:.env" },
      { label: "Jenkins Panels", dork: "intitle:\"Dashboard [Jenkins]\"" },
      { label: "Terraform Files", dork: "filetype:tf OR filetype:tfstate" }
    ]
  },
  {
    category: "Databases & Backups",
    icon: "fa-database",
    items: [
      { label: "SQL Dumps", dork: "filetype:sql intext:\"CREATE TABLE\"" },
      { label: "Database Backups", dork: "filetype:bak OR filetype:dump" },
      { label: "SQLite DBs", dork: "filetype:sqlite OR filetype:db" },
      { label: "MongoDB Dumps", dork: "filetype:json intext:mongodb" },
      { label: "Redis Dumps", dork: "filetype:rdb" },
      { label: "cPanel Backups", dork: "filetype:tar.gz inurl:cpanel" }
    ]
  },
  {
    category: "Credentials & Secrets",
    icon: "fa-key",
    items: [
      { label: "API Keys", dork: "intext:\"api_key\" OR intext:\"client_secret\"" },
      { label: "AWS Keys", dork: "intext:\"AKIA\" OR intext:\"aws_access_key_id\"" },
      { label: "Private SSH Keys", dork: "intext:\"BEGIN RSA PRIVATE KEY\"" },
      { label: "Passwords Files", dork: "filetype:txt intext:password" },
      { label: "JWT Tokens", dork: "intext:\"eyJ\" OR intext:\"Bearer eyJ\"" },
      { label: "OAuth Tokens", dork: "intext:\"access_token\"" }
    ]
  },
  {
    category: "Source Code & Leaks",
    icon: "fa-code",
    items: [
      { label: "Exposed Source Code", dork: "filetype:php OR filetype:js OR filetype:py OR filetype:java" },
      { label: "Backup Source Files", dork: "filetype:old OR filetype:bak OR filetype:swp" },
      { label: "Secrets in JS", dork: "filetype:js intext:key OR intext:token" },
      { label: "Hardcoded Passwords", dork: "intext:\"password =\"" }
    ]
  },
  {
    category: "Debug & Dev Environments",
    icon: "fa-laptop-code",
    items: [
      { label: "Debug Enabled", dork: "APP_DEBUG=true OR debug=true" },
      { label: "Test / Dev Sites", dork: "inurl:test OR inurl:dev OR inurl:staging" },
      { label: "Swagger APIs", dork: "inurl:swagger OR inurl:api-docs" },
      { label: "GraphQL Endpoints", dork: "inurl:graphql OR intext:\"__schema\"" }
    ]
  },
  {
    category: "Network & Infrastructure",
    icon: "fa-network-wired",
    items: [
      { label: "Open Web Ports", dork: "inurl:8080 OR inurl:8443 OR inurl:9200" },
      { label: "Elasticsearch", dork: "intitle:\"You Know, for Search\"" },
      { label: "Kibana Dashboards", dork: "intitle:\"Kibana\"" },
      { label: "Prometheus Metrics", dork: "inurl:/metrics" }
    ]
  },
  {
    category: "People & Identity OSINT",
    icon: "fa-user-secret",
    items: [
      { label: "Employee Lists", dork: "filetype:xls intext:employee" },
      { label: "Phone Directories", dork: "filetype:pdf intext:\"phone directory\"" },
      { label: "CVs / Resumes", dork: "filetype:pdf intext:resume OR intext:curriculum" },
      { label: "ID Numbers", dork: "filetype:xls intext:DNI OR intext:passport" }
    ]
  },
  {
    category: "OSINT & Recon",
    icon: "fa-eye",
    items: [
      { label: "Subdomains", dork: "-www" },
      { label: "Wayback Machine", dork: "site:web.archive.org" },
      { label: "Public Cameras", dork: "intitle:\"Live View\" OR inurl:view.shtml" },
      { label: "Printers", dork: "intitle:\"HP LaserJet\"" },
      { label: "IoT Devices", dork: "intitle:\"AXIS\" OR intitle:\"NETGEAR\"" }
    ]
  },
  {
    category: "Advanced Operators",
    icon: "fa-search-plus",
    items: [
      { label: "Cached Pages", dork: "cache:" },
      { label: "Related Sites", dork: "related:" },
      { label: "Exact Title", dork: "intitle:\"\"" },
      { label: "Exact URL", dork: "inurl:\"\"" },
      { label: "Exclude Domain", dork: "-example.com" }
    ]
  },
  {
    category: "Breach & Incident Intelligence",
    icon: "fa-skull-crossbones",
    items: [
      { label: "Data Breach Reports", dork: "intext:\"data breach\"" },
      { label: "Ransomware Victims", dork: "intext:ransomware filetype:pdf" },
      { label: "Credential Leaks", dork: "filetype:txt intext:credentials" }
    ]
  }
];

/* =========================================
   INITIALIZATION & DOM ELEMENTS
   ========================================= */
const targetInput = document.getElementById('target');
const keywordInput = document.getElementById('keyword-input');
const dorksContainer = document.getElementById('dorks-container');
const queryText = document.getElementById('query-text');
const queryPreview = document.getElementById('query-preview');
const customDorkInput = document.getElementById('custom-dork-input');

document.addEventListener('DOMContentLoaded', () => {
  renderDorks();
  setupEventListeners();
});

/* =========================================
   RENDER LOGIC (Generates the Cards)
   ========================================= */
function renderDorks() {
  if (!dorksContainer) return;
  dorksContainer.innerHTML = ''; // Clean container
  
  dorksData.forEach(category => {
    // Create Card
    const card = document.createElement('div');
    card.className = 'card';
    
    // Determine Icon (Fallback if not in data)
    const iconClass = category.icon || 'fa-terminal';

    // Header
    const header = document.createElement('h3');
    header.innerHTML = `<i class="fas ${iconClass}"></i> ${category.category}`;
    card.appendChild(header);

    // Generate Buttons
    category.items.forEach(item => {
      const btn = document.createElement('button');
      btn.textContent = item.label;
      // Note: We escape single quotes in the dork string just in case
      const safeDork = item.dork.replace(/'/g, "\\'");
      btn.onclick = () => executeSpecificDork(safeDork);
      card.appendChild(btn);
    });

    dorksContainer.appendChild(card);
  });
}

function setupEventListeners() {
    // Allow Enter key to trigger searches
    if(targetInput) {
        targetInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') runQuickSearch();
        });
        // Auto-clean domain on blur
        targetInput.addEventListener('blur', () => {
            if(targetInput.value) targetInput.value = cleanDomain(targetInput.value);
        });
    }
    
    if(keywordInput) {
        keywordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') runQuickSearch();
        });
    }

    if(customDorkInput) {
        customDorkInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') runCustomDork();
        });
    }
}

/* =========================================
   SEARCH EXECUTION FUNCTIONS
   ========================================= */

/**
 * 1. Quick Scan (The big button)
 * Searches Site + Keyword + Generic terms
 */
function runQuickSearch() {
  let domain = getCleanDomain();
  if (!domain) return;

  const keyword = keywordInput.value.trim();
  
  // Base query
  let query = `site:${domain}`;
  
  if (keyword) {
    query += ` intitle:"${keyword}"`;
  } else {
      // Default to finding interesting stuff if no keyword
      query += ` (intitle:index.of OR inurl:admin OR inurl:login OR inurl:dashboard)`;
  }

  updatePreview(query);
  openGoogle(query);
}

/**
 * 2. Specific Dork (Clicking a button in the grid)
 * Searches Site + Keyword + Specific Dork
 */
function executeSpecificDork(dorkCode) {
  let domain = getCleanDomain();
  if (!domain) return;

  const keyword = keywordInput.value.trim();
  
  let finalQuery = "";

  // Handle special cases where dork already has "site:"
  if (dorkCode.includes("site:")) {
      // If the dork is like "site:web.archive.org", we don't use the user's target domain usually,
      // OR we append the user's domain to the search.
      // For Wayback machine, we want: site:web.archive.org "target.com"
      if(dorkCode.includes("web.archive.org")) {
          finalQuery = `${dorkCode} "${domain}"`;
      } else {
          finalQuery = `${dorkCode} ${domain}`; 
      }
  } else {
      // Standard Behavior
      finalQuery = `site:${domain}`;
      if (keyword) finalQuery += ` intitle:"${keyword}"`;
      finalQuery += ` ${dorkCode}`;
  }

  updatePreview(finalQuery);
  openGoogle(finalQuery);
}

/**
 * 3. Custom Dork (Manual Input)
 */
function runCustomDork() {
  let customQuery = customDorkInput.value.trim();
  if (!customQuery) return;

  const domain = targetInput.value.trim(); // Raw value to check if empty
  
  // Smart merge: If user didn't type "site:" but has a domain set, add it.
  if (domain && !customQuery.includes('site:')) {
      const clean = cleanDomain(domain);
      customQuery = `site:${clean} ${customQuery}`;
  }

  updatePreview(customQuery);
  openGoogle(customQuery);
}

/* =========================================
   UTILITIES
   ========================================= */

function getCleanDomain() {
    const raw = targetInput.value.trim();
    if (!raw) {
        alert(">> SYSTEM ERROR: Please enter a Target Domain first.");
        targetInput.focus();
        targetInput.style.borderColor = "var(--neon-green)";
        setTimeout(() => targetInput.style.borderColor = "#333", 2000);
        return null;
    }
    const clean = cleanDomain(raw);
    targetInput.value = clean; // Update UI with clean version
    return clean;
}

function cleanDomain(domain) {
  // Remove http/https and www
  return domain
    .replace(/^(https?:\/\/)?(www\.)?/, '')
    .replace(/\/.*$/, '') // Remove path
    .replace(/\.$/, '')   // Remove trailing dot
    .toLowerCase();
}

function updatePreview(query) {
    if(queryPreview) queryPreview.classList.remove('hidden');
    if(queryText) queryText.textContent = query;
}

function openGoogle(query) {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
}

// Copy Button Logic
const copyBtn = document.getElementById('copy-btn');
if(copyBtn) {
    copyBtn.addEventListener('click', () => {
        const text = queryText.textContent;
        if(text === 'waiting for input...') return;
        
        navigator.clipboard.writeText(text).then(() => {
            const originalHTML = copyBtn.innerHTML;
            
            // Visual feedback
            copyBtn.innerHTML = '<i class="fas fa-check"></i> COPIED';
            copyBtn.style.color = '#fff';
            copyBtn.style.borderColor = '#fff';
            
            setTimeout(() => {
                copyBtn.innerHTML = originalHTML;
                copyBtn.style.color = ''; // Revert to CSS default
                copyBtn.style.borderColor = '';
            }, 2000);
        });
    });
}
