const dataStorageInstance = require('./dataStorageInstance');
const documentInstance = require('./documentServiceInstance')
const authinstance = require('./authinstance');
const createOrganization = '/api/v1/dataStorage/create-organization';
const listOrg = '/api/v1/dataStorage/list-organization'
const singleOrg = '/api/v1/dataStorage/single-organization'
const singleOrgLoc ='/api/v1/dataStorage/associated-locations'
const singleOrgUser = "/api/v1/identity-service/associated-users"
const editingOrganization = '/api/v1/dataStorage/edit-organization'
const editingLocation = '/api/v1/dataStorage/edit-locations'
const uploadLogo = '/api/v1/documentService/uploadlogo'
const deletingOrg = '/api/v1/dataStorage/delete-organization'

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

/** 
*  function to create an authorized instance of document service.
*  also this function uses the same authorized instance to make a call to the /uploadlogo
*  endpoint present in document service.
*/
function practiceLogoUpload(token, data){
  const authorizedInstance = documentInstance(token);
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
    return authorizedInstance.post(uploadLogo, data);
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
  return authorizedInstance.get(singleOrgLoc, {
    params: {
      id: data
    }
  });
}

async function singleOrgUsers(token,data){
  const instance = authinstance(token);
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

function deleteOrg(token, data) {
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
  return authorizedInstance.put(deletingOrg, data);
}
module.exports = {
    createPractice,
    organizations,
    singleOrganization,
    singleOrgLocation,
    singleOrgUsers,
    editOrganization,
    editLocation,
    practiceLogoUpload,
    deleteOrg
}