const dataStorageInstance = require('./dataStorageInstance');
const instance = require('./instance');
const createOrganization = '/api/v1/dataStorage/create-organization';
const listOrg = '/api/v1/dataStorage/list-organization'
const singleOrg = '/api/v1/dataStorage/single-organization'
const singleOrgLoc ='/api/v1/dataStorage/associated-locations'
const singleOrgUser = "/api/v1/identity-service/associated-users"
const editingOrganization = '/api/v1/dataStorage/edit-organization'
const editingLocation = '/api/v1/dataStorage/edit-locations'


function createPractice(token, data) {
    const authorizedInstance = dataStorageInstance(token);
    authorizedInstance.interceptors.response.use((response) => {
        return response;
      }, function (error) {
        if (error.response.status === 401) {
          return Promise.reject(error.response.data);
        }
      
        if (error.response.status === 400) {
          return Promise.reject(error.response.data);
        }
      });
    return authorizedInstance.post(createOrganization, data);
}


async function organizations(token){
  const authorizedInstance = dataStorageInstance(token);
  authorizedInstance.interceptors.response.use((response) => {
      return response;
    }, function (error) {
      if (error.response.status === 401) {
        return Promise.reject(error.response.data);
      }
    
      if (error.response.status === 400) {
        return Promise.reject(error.response.data);
      }
    });
  return authorizedInstance.get(listOrg);
}

async function singleOrganization(token,data){
  const authorizedInstance = dataStorageInstance(token);
  authorizedInstance.interceptors.response.use((response) => {
      return response;
    }, function (error) {
      if (error.response.status === 401) {
        return Promise.reject(error.response.data);
      }
    
      if (error.response.status === 400) {
        return Promise.reject(error.response.data);
      }
    });
  return authorizedInstance.get(singleOrg, {
    params: {
      id: data
    }
  });
}

async function singleOrgLocation(token,data){
  const authorizedInstance = dataStorageInstance(token);
  dataStorageInstance.interceptors.response.use((response) => {
      return response;
    }, function (error) {
      if (error.response.status === 401) {
        return Promise.reject(error.response.data);
      }
    
      if (error.response.status === 400) {
        return Promise.reject(error.response.data);
      }
    });
  return authorizedInstance.get(singleOrgLoc, {
    params: {
      id: data
    }
  });
}

async function singleOrgUsers(token,data){
  instance.interceptors.response.use((response) => {
      return response;
    }, function (error) {
      if (error.response.status === 401) {
        return Promise.reject(error.response.data);
      }
      if (error.response.status === 400) {
        return Promise.reject(error.response.data);
      }
    });
  return instance.get(singleOrgUser, {
    params: {
      id: data
    }
  });
}

async function editOrganization(token,data){
  const authorizedInstance = dataStorageInstance(token);
  authorizedInstance.interceptors.response.use((response) => {
      return response;
    }, function (error) {
      if (error.response.status === 401) {
        return Promise.reject(error.response.data);
      }
      if (error.response.status === 400) {
        return Promise.reject(error.response.data);
      }
    });
  return authorizedInstance.put(editingOrganization, data);
}

async function editLocation(token,data){
  const authorizedInstance = dataStorageInstance(token);
  authorizedInstance.interceptors.response.use((response) => {
      return response;
    }, function (error) {
      if (error.response.status === 401) {
        return Promise.reject(error.response.data);
      }
      if (error.response.status === 400) {
        return Promise.reject(error.response.data);
      }
    });
  return authorizedInstance.put(editingLocation, data);
}

module.exports = {
    createPractice,
    organizations,
    singleOrganization,
    singleOrgLocation,
    singleOrgUsers,
    editOrganization,
    editLocation
}