// scoring.js · Motor de Lead Scoring (0-100 puntos) según 6 criterios de la Ficha de Respaldo (Sección 4.4)
window.calculateWaoLeadScore = function(params) {
  var score = 0;
  // 1. Segmento: B2B (+25) / B2C (+10)
  score += (params.segment === 'B2B') ? 25 : 10;
  // 2. País / Mercado prioritario: US, CA, ES, DE, UK, AU (+10) / LATAM (+5) / Otro (+2)
  var priority = ['US', 'CA', 'ES', 'DE', 'UK', 'AU', 'FR'];
  var latam = ['CL', 'MX', 'CO', 'PE', 'AR', 'BR'];
  if (priority.indexOf(params.country) !== -1) score += 10;
  else if (latam.indexOf(params.country) !== -1) score += 5;
  else score += 2;
  // 3. Horizonte de viaje: <=3 meses (+20), 3-6 meses (+15), 6-12 meses (+5)
  if (params.monthsAway <= 3) score += 20;
  else if (params.monthsAway <= 6) score += 15;
  else score += 5;
  // 4. Tamaño del grupo B2C o Volumen B2B
  if (params.segment === 'B2B') {
    if (params.annualVolume >= 40) score += 20;
    else if (params.annualVolume >= 16) score += 12;
    else score += 5;
  } else {
    if (params.groupSize >= 5) score += 15;
    else if (params.groupSize >= 2) score += 10;
    else score += 5;
  }
  // 5. Presupuesto: >= USD 1.600 (+15), USD 1.200-1.600 (+7)
  if (params.budget === '1600_plus') score += 15;
  else if (params.budget === '1200_1600') score += 7;
  // 6. Protocolo Keweriono aceptado (+10)
  if (params.protocolAccepted) score += 10;

  var temperatura = score >= 60 ? 'Caliente' : (score >= 35 ? 'Tibio' : 'Frío');
  return { score: score, temperatura: temperatura };
};
