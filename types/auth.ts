export interface ApiResponse<T = any> {
    success: boolean;
    message: string;
    data: T;
    user:any,
    body:any,
    
}




export interface BasicDetails {
  firstName: string;
  lastName: string;
  profilePic: string;
  phoneNumber: string;
}

export interface ContactDetails {
  villageCity: string;
  post: string;
  district: string;
  policeStation: string;
  state: string;
  region: string;
}

export interface ProfileState {
  basicDetails: BasicDetails;
  contactDetails: ContactDetails;
}
