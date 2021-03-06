
// A "single source of thuth" for route names
export enum RouteName {
  Keys = 'keys',
  Diagnostics = 'diagnostics',
  Settings = 'settings',
  AddSubsystem = 'add-subsystem',
  AddClient = 'add-client',
  Clients = 'clients',
  Subsystem = 'subsystem',
  Client = 'client',
  Login = 'login',
}

// A "single source of thuth" for permission strings
export enum Permissions {
  DELETE_KEY = 'DELETE_KEY',
  EXPORT_INTERNAL_SSL_CERT = 'EXPORT_INTERNAL_SSL_CERT',
  VIEW_TSPS = 'VIEW_TSPS',
  RESTORE_CONFIGURATION = 'RESTORE_CONFIGURATION',
  VIEW_CLIENT_LOCAL_GROUPS = 'VIEW_CLIENT_LOCAL_GROUPS',
  SEND_AUTH_CERT_DEL_REQ = 'SEND_AUTH_CERT_DEL_REQ',
  DELETE_SIGN_KEY = 'DELETE_SIGN_KEY',
  VIEW_ANCHOR = 'VIEW_ANCHOR',
  GENERATE_INTERNAL_SSL_CSR = 'GENERATE_INTERNAL_SSL_CSR',
  INIT_CONFIG = 'INIT_CONFIG',
  DEACTIVATE_TOKEN = 'DEACTIVATE_TOKEN',
  VIEW_CLIENT_SERVICES = 'VIEW_CLIENT_SERVICES',
  GENERATE_AUTH_CERT_REQ = 'GENERATE_AUTH_CERT_REQ',
  DELETE_AUTH_KEY = 'DELETE_AUTH_KEY',
  GENERATE_SIGN_CERT_REQ = 'GENERATE_SIGN_CERT_REQ',
  ADD_TSP = 'ADD_TSP',
  EDIT_CLIENT_INTERNAL_CONNECTION_TYPE = 'EDIT_CLIENT_INTERNAL_CONNECTION_TYPE',
  ADD_WSDL = 'ADD_WSDL',
  VIEW_PROXY_INTERNAL_CERT = 'VIEW_PROXY_INTERNAL_CERT',
  VIEW_CLIENT_INTERNAL_CERTS = 'VIEW_CLIENT_INTERNAL_CERTS',
  DOWNLOAD_ANCHOR = 'DOWNLOAD_ANCHOR',
  EXPORT_PROXY_INTERNAL_CERT = 'EXPORT_PROXY_INTERNAL_CERT',
  SEND_CLIENT_DEL_REQ = 'SEND_CLIENT_DEL_REQ',
  ADD_LOCAL_GROUP = 'ADD_LOCAL_GROUP',
  VIEW_ACL_SUBJECT_OPEN_SERVICES = 'VIEW_ACL_SUBJECT_OPEN_SERVICES',
  IMPORT_AUTH_CERT = 'IMPORT_AUTH_CERT',
  EDIT_SERVICE_ACL = 'EDIT_SERVICE_ACL',
  BACKUP_CONFIGURATION = 'BACKUP_CONFIGURATION',
  ADD_CLIENT_INTERNAL_CERT = 'ADD_CLIENT_INTERNAL_CERT',
  DELETE_TSP = 'DELETE_TSP',
  ACTIVATE_DISABLE_AUTH_CERT = 'ACTIVATE_DISABLE_AUTH_CERT',
  UPLOAD_ANCHOR = 'UPLOAD_ANCHOR',
  DELETE_SIGN_CERT = 'DELETE_SIGN_CERT',
  DIAGNOSTICS = 'DIAGNOSTICS',
  EDIT_ACL_SUBJECT_OPEN_SERVICES = 'EDIT_ACL_SUBJECT_OPEN_SERVICES',
  EDIT_LOCAL_GROUP_DESC = 'EDIT_LOCAL_GROUP_DESC',
  VIEW_CLIENT_ACL_SUBJECTS = 'VIEW_CLIENT_ACL_SUBJECTS',
  DELETE_WSDL = 'DELETE_WSDL',
  EDIT_KEYTABLE_FRIENDLY_NAMES = 'EDIT_KEYTABLE_FRIENDLY_NAMES',
  DELETE_CLIENT = 'DELETE_CLIENT',
  REFRESH_WSDL = 'REFRESH_WSDL',
  ACTIVATE_DISABLE_SIGN_CERT = 'ACTIVATE_DISABLE_SIGN_CERT',
  IMPORT_EXPORT_SERVICE_ACL = 'IMPORT_EXPORT_SERVICE_ACL',
  IMPORT_INTERNAL_SSL_CERT = 'IMPORT_INTERNAL_SSL_CERT',
  SEND_AUTH_CERT_REG_REQ = 'SEND_AUTH_CERT_REG_REQ',
  GENERATE_KEY = 'GENERATE_KEY',
  VIEW_CLIENTS = 'VIEW_CLIENTS',
  VIEW_INTERNAL_SSL_CERT = 'VIEW_INTERNAL_SSL_CERT',
  EDIT_SERVICE_PARAMS = 'EDIT_SERVICE_PARAMS',
  EDIT_WSDL = 'EDIT_WSDL',
  VIEW_KEYS = 'VIEW_KEYS',
  EXPORT_CLIENT_SERVICES_ACL = 'EXPORT_CLIENT_SERVICES_ACL',
  DELETE_CLIENT_INTERNAL_CERT = 'DELETE_CLIENT_INTERNAL_CERT',
  VIEW_CLIENT_INTERNAL_CONNECTION_TYPE = 'VIEW_CLIENT_INTERNAL_CONNECTION_TYPE',
  DELETE_WSDL_MISSING_SERVICES = 'DELETE_WSDL_MISSING_SERVICES',
  VIEW_CLIENT_INTERNAL_CERT_DETAILS = 'VIEW_CLIENT_INTERNAL_CERT_DETAILS',
  VIEW_SERVICE_ACL = 'VIEW_SERVICE_ACL',
  DELETE_AUTH_CERT = 'DELETE_AUTH_CERT',
  SEND_CLIENT_REG_REQ = 'SEND_CLIENT_REG_REQ',
  GENERATE_INTERNAL_CERT_REQ = 'GENERATE_INTERNAL_CERT_REQ',
  IMPORT_SIGN_CERT = 'IMPORT_SIGN_CERT',
  ADD_CLIENT = 'ADD_CLIENT',
  DELETE_LOCAL_GROUP = 'DELETE_LOCAL_GROUP',
  ENABLE_DISABLE_WSDL = 'ENABLE_DISABLE_WSDL',
  EDIT_LOCAL_GROUP_MEMBERS = 'EDIT_LOCAL_GROUP_MEMBERS',
  VIEW_CLIENT_DETAILS_DIALOG = 'VIEW_CLIENT_DETAILS_DIALOG',
  ACTIVATE_TOKEN = 'ACTIVATE_TOKEN',
  GENERATE_INTERNAL_SSL = 'GENERATE_INTERNAL_SSL',
  VIEW_SYS_PARAMS = 'VIEW_SYS_PARAMS',
}

export const mainTabs = [
  {
    to: { name: RouteName.Clients },
    key: 'clients',
    name: 'clients',
    permission: Permissions.VIEW_CLIENTS,
  },
  {
    to: { name: RouteName.Keys },
    key: 'keys',
    name: 'keys and certificates',
    permission: Permissions.VIEW_KEYS,
  },
  {
    to: { name: RouteName.Diagnostics },
    key: 'diagnostics',
    name: 'diagnostics',
    permission: Permissions.DIAGNOSTICS,
  },
  {
    to: { name: RouteName.Settings },
    key: 'settings',
    name: 'settings',
  },
];
