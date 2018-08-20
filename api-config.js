let backendHost;
const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

if(hostname === 'realsite.com') {
  backendHost = 'https://api.realsite.com';
} else if(hostname === 'maacaro-analytics-api.herokuapp.com') {
  backendHost = 'https://maacaro-analytics-api.herokuapp.com';
} else if(/^qa/.test(hostname)) {
  backendHost = `https://api.${hostname}`;
} else {
  backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:3000';
}

export const API_ROOT = `${backendHost}/api/${apiVersion}`;