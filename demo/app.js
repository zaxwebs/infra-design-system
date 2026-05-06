/* ========================================
   Infra Design System — Demo Interactions
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ── Theme Toggle ──────────────────────────────────
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const icons = toggle.querySelectorAll('.icon');

  function applyTheme(theme) {
    root.className = theme;
    if (theme === 'light') {
      icons[0].classList.remove('active'); // moon
      icons[1].classList.add('active');    // sun
    } else {
      icons[0].classList.add('active');
      icons[1].classList.remove('active');
    }
    localStorage.setItem('infra-theme', theme);
  }

  // Initialize from stored preference
  const stored = localStorage.getItem('infra-theme') || 'dark';
  applyTheme(stored);

  toggle.addEventListener('click', () => {
    applyTheme(root.classList.contains('dark') ? 'light' : 'dark');
  });

  // ── Tabs ──────────────────────────────────────────
  const tabs = document.querySelectorAll('.tab[data-target]');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.style.display = 'none');
      tab.classList.add('active');
      const panel = document.getElementById(tab.dataset.target);
      if (panel) panel.style.display = 'block';
    });
  });

  // ── Range inputs (forms section) ──────────────────
  const cpuRange = document.getElementById('range-cpu');
  const cpuVal = document.getElementById('cpu-value');
  if (cpuRange && cpuVal) {
    cpuRange.addEventListener('input', () => {
      cpuVal.textContent = parseFloat(cpuRange.value).toFixed(2);
    });
  }

  const replicaRange = document.getElementById('range-replicas');
  const replicaVal = document.getElementById('replica-value');
  if (replicaRange && replicaVal) {
    replicaRange.addEventListener('input', () => {
      replicaVal.textContent = replicaRange.value;
    });
  }

  // ── Pricing Calculator ────────────────────────────
  const calcCpu = document.getElementById('calc-cpu');
  const calcRam = document.getElementById('calc-ram');
  const calcReplicas = document.getElementById('calc-replicas');
  const calcHours = document.getElementById('calc-hours');

  const calcCpuVal = document.getElementById('calc-cpu-val');
  const calcRamVal = document.getElementById('calc-ram-val');
  const calcReplicasVal = document.getElementById('calc-replicas-val');
  const calcHoursVal = document.getElementById('calc-hours-val');

  const calcTotal = document.getElementById('calc-total');
  const calcCpuCost = document.getElementById('calc-cpu-cost');
  const calcRamCost = document.getElementById('calc-ram-cost');
  const calcReplicasNote = document.getElementById('calc-replicas-note');

  const CPU_RATE = 0.0463;   // per vCPU per hour
  const RAM_RATE = 0.0058;   // per GB per hour
  const BW_EST = 10.00;      // flat estimate
  const BUILD_EST = 2.50;    // flat estimate

  function updateCalc() {
    if (!calcCpu) return;

    const cpu = parseFloat(calcCpu.value);
    const ram = parseFloat(calcRam.value);
    const replicas = parseInt(calcReplicas.value, 10);
    const hours = parseInt(calcHours.value, 10);

    // Update labels
    calcCpuVal.textContent = cpu;
    calcRamVal.textContent = ram;
    calcReplicasVal.textContent = replicas;
    calcHoursVal.textContent = hours;

    // Calculate
    const cpuCost = cpu * CPU_RATE * hours;
    const ramCost = ram * RAM_RATE * hours;
    const subtotal = (cpuCost + ramCost) * replicas;
    const total = subtotal + BW_EST + BUILD_EST;

    calcCpuCost.textContent = '$' + cpuCost.toFixed(2);
    calcRamCost.textContent = '$' + ramCost.toFixed(2);
    calcReplicasNote.textContent = '×' + replicas;
    calcTotal.textContent = '$' + total.toFixed(2);
  }

  [calcCpu, calcRam, calcReplicas, calcHours].forEach(el => {
    if (el) el.addEventListener('input', updateCalc);
  });
  updateCalc();

  // ── Scroll-triggered animation ────────────────────
  const animEls = document.querySelectorAll('.animate-in');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    animEls.forEach(el => {
      el.style.animationPlayState = 'paused';
      obs.observe(el);
    });
  }

  // ── Smooth scroll for nav links ───────────────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
