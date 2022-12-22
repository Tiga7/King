package com.kob.backend.config.utils;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;


/**
 * @author Gan
 */
@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {
    /**
     * 默认全局异常处理。
     * @param e the e
     * @return ResultData
     */
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResultData<String> exception(Exception e) {
        //方便调试
//        log.error("异常信息:{}", e.getMessage(), e);

        log.error("全局异常信息: {}", e.getMessage());

        return ResultData.fail(ReturnCode.RETURN_CODE_500.getCode(), e.getMessage());
    }

}

