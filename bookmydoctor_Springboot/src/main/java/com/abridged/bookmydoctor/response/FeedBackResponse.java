package com.abridged.bookmydoctor.response;

import java.util.List;

import com.abridged.bookmydoctor.dto.FeedBackInfoBean;

import lombok.Data;

@Data
public class FeedBackResponse {

	private int statusCode;
	private boolean isError;
	private String message;
	private FeedBackInfoBean bean;
	private List<FeedBackInfoBean> list;
}
