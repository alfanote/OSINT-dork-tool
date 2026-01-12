/* =========================================
   DATABASE: DORK CATEGORIES
   ========================================= */
const dorksData = [
  {
    category: " Files & Documents",
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
    category: " Server & Config",
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
    category: " Bug Bounty & Vulnerabilities",
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
    category: " Cloud & DevOps",
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
    category: " Databases & Backups",
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
    category: " Credentials & Secrets",
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
    category: " Source Code & Leaks",
    items: [
      { label: "Exposed Source Code", dork: "filetype:php OR filetype:js OR filetype:py OR filetype:java" },
      { label: "Backup Source Files", dork: "filetype:old OR filetype:bak OR filetype:swp" },
      { label: "Secrets in JS", dork: "filetype:js intext:key OR intext:token" },
      { label: "Hardcoded Passwords", dork: "intext:\"password =\"" }
    ]
  },
  {
    category: " Debug & Dev Environments",
    items: [
      { label: "Debug Enabled", dork: "APP_DEBUG=true OR debug=true" },
      { label: "Test / Dev Sites", dork: "inurl:test OR inurl:dev OR inurl:staging" },
      { label: "Swagger APIs", dork: "inurl:swagger OR inurl:api-docs" },
      { label: "GraphQL Endpoints", dork: "inurl:graphql OR intext:\"__schema\"" }
    ]
  },
  {
    category: " Network & Infrastructure",
    items: [
      { label: "Open Web Ports", dork: "inurl:8080 OR inurl:8443 OR inurl:9200" },
      { label: "Elasticsearch", dork: "intitle:\"You Know, for Search\"" },
      { label: "Kibana Dashboards", dork: "intitle:\"Kibana\"" },
      { label: "Prometheus Metrics", dork: "inurl:/metrics" }
    ]
  },
  {
    category: " People & Identity OSINT",
    items: [
      { label: "Employee Lists", dork: "filetype:xls intext:employee" },
      { label: "Phone Directories", dork: "filetype:pdf intext:\"phone directory\"" },
      { label: "CVs / Resumes", dork: "filetype:pdf intext:resume OR intext:curriculum" },
      { label: "ID Numbers", dork: "filetype:xls intext:DNI OR intext:passport" }
    ]
  },
  {
    category: " OSINT & Recon",
    items: [
      { label: "Subdomains", dork: "-www" },
      { label: "Wayback Machine", dork: "site:web.archive.org" },
      { label: "Public Cameras", dork: "intitle:\"Live View\" OR inurl:view.shtml" },
      { label: "Printers", dork: "intitle:\"HP LaserJet\"" },
      { label: "IoT Devices", dork: "intitle:\"AXIS\" OR intitle:\"NETGEAR\"" }
    ]
  },
  {
    category: " Advanced Operators",
    items: [
      { label: "Cached Pages", dork: "cache:" },
      { label: "Related Sites", dork: "related:" },
      { label: "Exact Title", dork: "intitle:\"\"" },
      { label: "Exact URL", dork: "inurl:\"\"" },
      { label: "Exclude Domain", dork: "-example.com" }
    ]
  },
  {
    category: " Breach & Incident Intelligence",
    items: [
      { label: "Data Breach Reports", dork: "intext:\"data breach\"" },
      { label: "Ransomware Victims", dork: "intext:ransomware filetype:pdf" },
      { label: "Credential Leaks", dork: "filetype:txt intext:credentials" }
    ]
  }
];

/* =========================================
   INITIALIZATION
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
  renderButtons();
  setupEventListeners();
  setupAccessibility();
});

function renderButtons() {
  const container = document.getElementById('dorks-container');
  
  if (!container) {
    console.error('Dorks container not found');
    return;
  }
  
  container.innerHTML = ''; // Limpiar contenedor
  
  dorksData.forEach(category => {
    // Crear tarjeta de categoría
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('role', 'region');
    card.setAttribute('aria-label', category.category);
    
    // Título de la categoría
    const title = document.createElement('h3');
    title.textContent = category.category;
    card.appendChild(title);

    // Botones de la categoría
    category.items.forEach(item => {
      const btn = document.createElement('button');
      btn.textContent = item.label;
      btn.setAttribute('aria-label', `Search for ${item.label}`);
      btn.setAttribute('data-dork', item.dork);
      // Asignar función de búsqueda al click
      btn.onclick = () => updateAndSearch(item.dork);
      card.appendChild(btn);
    });

    container.appendChild(card);
  });
}

function setupEventListeners() {
  const targetInput = document.getElementById('target');
  const customInput = document.getElementById('custom-dork-input');
  const keywordInput = document.getElementById('keyword-input');
  
  // Permitir buscar con ENTER en los inputs
  if (customInput) {
    customInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') runCustomDork();
    });
  }

  if (keywordInput) {
    keywordInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') runQuickSearch();
    });
  }
  
  // Limpieza automática del dominio al salir del input
  if (targetInput) {
    targetInput.addEventListener('blur', () => {
      const value = targetInput.value.trim();
      if (value) {
        targetInput.value = cleanDomain(value);
      }
    });
  }
}

function setupAccessibility() {
  if (!document.getElementById('aria-live-region')) {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only'; // Clase para ocultar visualmente pero disponible para lectores
    liveRegion.id = 'aria-live-region';
    document.body.appendChild(liveRegion);
  }
}

/* =========================================
   CORE SEARCH LOGIC
   ========================================= */

/**
 * Función principal para los botones de dorks específicos (PDF, Config, etc.)
 * Combina: Site + Dork + Keyword (Opcional)
 */
function updateAndSearch(dorkQuery) {
  const targetInput = document.getElementById('target');
  const keywordInput = document.getElementById('keyword-input');
  
  let domain = targetInput.value.trim();
  let keyword = keywordInput ? keywordInput.value.trim() : "";

  // Validación de dominio
  if (!domain) {
    showNotification('⚠️ Error: Please enter a target domain first.', 'error');
    targetInput.focus();
    return;
  }

  domain = cleanDomain(domain);
  
  if (!isValidDomain(domain)) {
    showNotification('⚠️ Invalid domain format. Please enter a valid domain (e.g., example.com)', 'error');
    targetInput.focus();
    return;
  }
  
  targetInput.value = domain; // Actualizar input con versión limpia

  // Construcción de la Query
  let fullQuery = "";
  
  // Lógica site:
  if (dorkQuery.startsWith("site:")) {
    fullQuery = `${dorkQuery} "${domain}"`;
  } else {
    fullQuery = `site:${domain} ${dorkQuery}`;
  }

  // Lógica Keyword (Nuevo: Añade el tema si existe)
  if (keyword) {
      fullQuery += ` intitle:"${keyword}"`;
  }

  updateQueryPreview(fullQuery);
  executeSearch(fullQuery);
  
  announceToScreenReader(`Searching for ${dorkQuery} on ${domain}`);
}

/**
 * NUEVA FUNCIÓN: Búsqueda rápida (Botón Grande)
 * Busca solo site + keyword, sin especificar tipo de archivo
 */
function runQuickSearch() {
  const targetInput = document.getElementById('target');
  const keywordInput = document.getElementById('keyword-input');

  let domain = targetInput.value.trim();
  let keyword = keywordInput ? keywordInput.value.trim() : "";

  if (!domain) {
    showNotification('⚠️ Error: Please enter a target domain first.', 'error');
    targetInput.focus();
    return;
  }

  domain = cleanDomain(domain);
  targetInput.value = domain;

  // Base query
  let fullQuery = `site:${domain}`;

  // Si hay keyword, la añadimos. Si no, busca todo el sitio.
  if (keyword) {
      fullQuery += ` intitle:"${keyword}"`;
  }

  updateQueryPreview(fullQuery);
  executeSearch(fullQuery);
}

/**
 * Función para el input de Dork Personalizado (Custom Builder)
 */
function runCustomDork() {
  const customInput = document.getElementById('custom-dork-input');
  const customDork = customInput.value.trim();
  
  if (!customDork) {
    showNotification('Please enter a custom dork query.', 'warning');
    customInput.focus();
    return;
  }

  // Si el usuario ya escribió "site:", lo usamos tal cual.
  // Si no, asumimos que quiere usar la lógica normal (Domain + Custom)
  if (customDork.includes('site:')) {
    executeSearch(customDork);
    updateQueryPreview(customDork);
  } else {
    updateAndSearch(customDork);
  }
}

/* =========================================
   HELPER FUNCTIONS
   ========================================= */

function cleanDomain(domain) {
  // Eliminar protocolo (http/https) y www
  domain = domain.replace(/^(https?:\/\/)?(www\.)?/, '');
  // Eliminar rutas después del dominio (ej: .com/pagina -> .com)
  domain = domain.replace(/\/.*$/, '');
  // Eliminar puntos finales
  domain = domain.replace(/\.$/, '');
  
  return domain.toLowerCase();
}

function isValidDomain(domain) {
  // Regex simple para validar dominios
  const domainRegex = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,}$/i;
  return domainRegex.test(domain);
}

function updateQueryPreview(query) {
  const previewBox = document.getElementById('query-preview');
  const queryText = document.getElementById('query-text');
  
  if (!previewBox || !queryText) return;
  
  previewBox.classList.remove('hidden');
  queryText.textContent = query;

  setupCopyButton(query);
}

function setupCopyButton(text) {
  const copyBtn = document.getElementById('copy-btn');
  
  if (!copyBtn) return;
  
  // Clonar botón para eliminar eventos anteriores
  const newBtn = copyBtn.cloneNode(true);
  copyBtn.parentNode.replaceChild(newBtn, copyBtn);
  
  newBtn.onclick = () => {
    navigator.clipboard.writeText(text).then(() => {
      const originalText = newBtn.textContent;
      newBtn.textContent = '✓ Copied!';
      newBtn.style.backgroundColor = 'var(--accent-green)';
      
      setTimeout(() => {
        newBtn.textContent = originalText;
        newBtn.style.backgroundColor = '';
      }, 2000);
      
      announceToScreenReader('Query copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy:', err);
      showNotification('Failed to copy to clipboard', 'error');
    });
  };
}

function executeSearch(query) {
  const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  window.open(googleUrl, '_blank');
}

function showNotification(message, type = 'info') {
  alert(message); // Por ahora usamos alert nativo
  announceToScreenReader(message);
}

function announceToScreenReader(message) {
  const liveRegion = document.getElementById('aria-live-region');
  if (liveRegion) {
    liveRegion.textContent = message;
    setTimeout(() => {
      liveRegion.textContent = '';
    }, 1000);
  }
}

// Exponer funciones globales al objeto window para que funcionen con onclick="" en HTML
window.updateAndSearch = updateAndSearch;
window.runQuickSearch = runQuickSearch;
window.runCustomDork = runCustomDork;
