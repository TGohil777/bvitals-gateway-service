const dataStorageInstance = require('./dataStorageInstance');
const instance = require('./instance');
const createOrganization = '/api/v1/dataStorage/create-organization';
const editOrganization = '/api/v1/dataStorage/edit-organization'
const listOrg = '/api/v1/dataStorage/list-organization'
const singleOrg = '/api/v1/dataStorage/single-organization'
const singleOrgLoc ='/api/v1/dataStorage/associated-locations'

//------------------------------------------------------------------------------------------------------------------
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
async function editPractice(data) {
    return await instance.put(editOrganization, data)
}
//------------------------------------------------------------------------------------------------------------------
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
//----------------------------------------------------------------------------------------------------------------------
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
    },
    headers: {
      Authorization: token
    }
  });
}
//---------------------------------------------------------------------------------------------------------------------
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
    },
    headers: {
      Authorization: token
    }
  });
}
//---------------------------------------------------------------------------------------------------------------------
module.exports = {
    createPractice,
    editPractice,
    organizations,
    singleOrganization,
    singleOrgLocation
}