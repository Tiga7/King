package com.kob.backend.config.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.MethodParameter;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyAdvice;

import javax.annotation.Resource;

@RestControllerAdvice(basePackages = {"com.ptc.backend"})
public class MyResponseAdvice implements ResponseBodyAdvice<Object> {

    /**
     * 有个一神奇的问题, 不能找到这个bean还是能正常运行
     */
    @Resource
    private ObjectMapper objectMapper;

    @Override
    public boolean supports(MethodParameter methodParameter, Class<? extends HttpMessageConverter<?>> aClass) {
        // response是ResultData类型，或者注释了NotControllerResponseAdvice都不进行包装
        return !methodParameter.getParameterType().isAssignableFrom(ResultData.class);
    }

    @Override
    public Object beforeBodyWrite(Object o, MethodParameter returnType, MediaType mediaType, Class<? extends HttpMessageConverter<?>> aClass, ServerHttpRequest request, ServerHttpResponse response) {

        // String类型不能直接包装
        if (returnType.getGenericParameterType().equals(String.class)) {
            try {
                // 将数据包装在ResultData里后转换为json串进行返回
                return objectMapper.writeValueAsString(ResultData.success(o));
            } catch (JsonProcessingException e) {
                throw new RuntimeException(e);
            }
        }

        // 否则直接包装成ResultData返回
        return ResultData.success(o);
    }
}