import axios from 'axios'
import { APIURL } from '@config'

class Database {
      constructor() {
          this.db = axios.create({
            baseURL: APIURL,
            timeout: 10000,
          })
      }
      get = async (path='', params={}) => {
        try {
            const response = await this.db.get(path,{
                params: params
              });
            return response.data
          } catch (error) {
            console.error(error);
            return false
          }
      }
  }

  let DB = new Database()
  export default DB
  