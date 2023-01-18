/* eslint-disable @typescript-eslint/no-explicit-any */
interface Gist {
  id: number;
  login: string;
  description: string;
  files?: any;
  comments: string;
  created_at: string;
  updated_at: string;
}
export default Gist;
