// config.js · Configuración central de Experiencias WAO (Equipo 2)
window.WAO_CONFIG = {
  siteUrl: window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/'),
  hubspotPortalId: '', // Ingresar Portal ID de HubSpot para envío directo por Forms API v3
  hubspotForms: {
    b2cPreReserva: '',
    b2bSocios: '',
    pasaporteQr: ''
  },
  stripeDepositLinkUsd: 'https://buy.stripe.com/test_ewao_deposit_30pct',
  ga4MeasurementId: 'G-EWAOWAO2027'
};
