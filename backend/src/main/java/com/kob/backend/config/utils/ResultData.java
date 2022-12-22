package com.kob.backend.config.utils;

import lombok.Data;

import java.time.LocalDateTime;

/**
 * @author Gan
 */
@Data
public class ResultData<T> {
    /**
     * 结果状态 ,具体状态码参见ResultCode.java
     */
    private Integer code;
    private String message;
    private T data;
    private LocalDateTime timeStamp;

    public ResultData() {
        this.timeStamp = LocalDateTime.now();
    }

    public static <T> ResultData<T> success(T data) {
        ResultData<T> resultData = new ResultData<>();
        resultData.setCode(ReturnCode.SUCCESS.getCode());
        resultData.setMessage(ReturnCode.SUCCESS.getMessage());
        resultData.setData(data);
        return resultData;
    }

    public static <T> ResultData<T> fail(Integer code, String message) {
        ResultData<T> resultData = new ResultData<>();
        resultData.setCode(code);
        resultData.setMessage(message);
        return resultData;
    }

}
