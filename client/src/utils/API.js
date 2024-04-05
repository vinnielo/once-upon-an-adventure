import axios from "axios";
// import Story from "../../../models/storyModel";

export default {
  // Get all users
  getUser: function(userData) {
    return axios.get("/api/signup", userData );
  },
  
  // Saves a User to the database
  saveUser: function(userData) {
    return axios.post("/api/signup", userData);
  },

  findUser: function(userData) {
    return axios.post("/api/signup/login", userData);
  },


  // findSprite: function(userData) {
  //   return axios.post("/api/sprite", userData);
  // },

  getSprite: function(spriteData) {
    return axios.get("/api/sprite", spriteData );
  },

  getUserSprite: function(id) {
    return axios.get(`${process.env.REACT_APP_API}/api/user/avatar/${id}`)
  },

  getUserStory: function(id) {
    return axios.get(`/api/user/avatar/story/${id}`)
  },

  getUserInventory: function(id) {
    return axios.get(`/api/user/inventory/${id}`)
  },
  
  UpdateSpriteLives: function(spriteData, id) {
    return axios.put("/api/sprite/lives/"  + id + "/" + spriteData);
  },
  
  
  UpdateSpriteMoney: function(spriteData, id) {
    return axios.put("/api/sprite/money/"  + id + "/" + spriteData);
  },
  UpdateSpriteHomeFirst: function(spriteData, id) {
    return axios.put("/api/sprite/homefirst/" + id, spriteData);
  },

  UpdateSpriteFirstGuardTalk: function(spriteData, id) {
    return axios.put("/api/sprite/guardTalk/" + id ,spriteData)
  },

  UpdateSpriteFirstOrcTalk: function(spriteData, id) {
    return axios.put("/api/sprite/orcTalk/" + id ,spriteData)
  },

  UpdateSpriteFirstJaceTalk: function(spriteData, id) {
    return axios.put("/api/sprite/jaceTalk/" + id ,spriteData)
  },

  UpdateSpriteFirstThiefTalk: function(spriteData, id) {
    return axios.put("/api/sprite/thiefTalk/" + id ,spriteData)
  },

  UpdateSpritePlace: function(spriteData, id) {
    return axios.put("/api/sprite/place/" + id + "/" + spriteData)
  },
  
  UpdateSpritePermit: function(spriteData, id) {
    return axios.put("/api/sprite/permit/" + id, spriteData);
  },

  UpdateStory: function(storyData, id) {
    return axios.put("/api/story/update/" + id + "/" + storyData)
  },
  
  saveSprite: function(spriteData, id) {
    return axios.post("/api/sprite/" + id, spriteData);
  },

  createStory: function(storyData, id) {
    return axios.post("/api/story/" + id, storyData);
  },

  getInventory: function(spriteData) {
    return axios.get("/api/inventory", spriteData );
  },
  saveInventory: function(spriteData, id) {
    return axios.post("/api/inventory" + id, spriteData);
  },


};
