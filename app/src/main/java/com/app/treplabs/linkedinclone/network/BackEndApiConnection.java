package com.app.treplabs.linkedinclone.network;

import java.util.HashMap;
import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface BackEndApiConnection {
    @POST(value = "login")
    Call<ResponseBody> logUserIn(@Body HashMap<String, String> map);
}
