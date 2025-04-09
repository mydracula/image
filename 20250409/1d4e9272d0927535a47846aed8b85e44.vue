<template>
  <view class="item-wrap" :class="type">
    <block v-if="
      type == 'category' && category.child_list && category.child_list.length
    ">
      <view class="category-adv" v-if="category.image_adv" @click="diyRedirectTo(category.link_url)">
        <image :src="$util.img(category.image_adv)" mode="widthFix" />
      </view>

      <block v-if="value.level == 2">
        <view class="category-title">{{ category.category_name }}</view>
        <view class="category-list">
          <view class="category-item" v-for="(one, oneIndex) in category.child_list" :key="oneIndex" @click="
            $util.redirectTo('/pages/goods/list', {
              category_id: one.category_id,
            })
            ">
            <view class="img-box">
              <image :src="$util.img(one.image)" mode="widthFix" />
            </view>
            <view class="name">{{ one.category_name }}</view>
          </view>
        </view>
      </block>

      <block v-if="value.level == 3">
        <block v-for="(one, oneIndex) in category.child_list" :key="oneIndex">
          <view class="category-title">{{ one.category_name }}</view>
          <view class="category-list">
            <view class="category-item" v-for="(two, twoIndex) in one.child_list" :key="twoIndex" @click="
              $util.redirectTo('/pages/goods/list', {
                category_id: two.category_id,
              })
              ">
              <view class="img-box">
                <image :src="$util.img(two.image)" mode="widthFix" :lazy-load="true" />
              </view>
              <view class="name">{{ two.category_name }}</view>
            </view>
          </view>
        </block>
      </block>
    </block>

    <block v-if="type == 'goods'">
      <view class="categoty-goods-wrap" v-if="loadType == 'part'"
        :style="'padding-top:' + (value.search ? 0 : '20rpx')">
        <!-- 分类筛选 -->
        <block v-if="category.child_list && value.goodsLevel == 2">
          <view class="screen-category-wrap">
            <scroll-view scroll-x="true" class="screen-category" :class="{ 'screen-category-4': value.template == 4 }"
              :scroll-with-animation="true" :scroll-into-view="scrollIntoView">
              <view class="item" id="category-2--1" :class="{ selected: categoryId == -1 }" @click="selectCategory(-1)">
                全部</view>
              <view class="item" :id="'category-2-' + oneIndex" :class="{ selected: categoryId == oneIndex }"
                @click="selectCategory(oneIndex)" v-for="(one, oneIndex) in category.child_list" :key="oneIndex">
                {{ one.category_name }}
              </view>
            </scroll-view>
            <view class="iconfont icon-unfold" @click="$refs.screenCategoryPopup.open()"></view>
          </view>
          <uni-popup type="top" ref="screenCategoryPopup">
            <view class="screen-category-popup" @click="$refs.screenCategoryPopup.close()">
              <scroll-view scroll-y="true" class="screen-category"
                :class="{ 'screen-category-4': value.template == 4 }">
                <view class="title">全部</view>
                <view class="item" :class="{ selected: categoryId == oneIndex }" @click="selectCategory(oneIndex)"
                  v-for="(one, oneIndex) in category.child_list" :key="oneIndex">
                  {{ one.category_name }}
                </view>
              </scroll-view>
            </view>
          </uni-popup>
        </block>

        <scroll-view scroll-y="true" class="scroll-goods-view" lower-threshold="300" :scroll-top="scrollTop"
          @scrolltolower="scrolltolower" @touchstart="touchstart" @touchend="touchend" @scroll="listenScroll">

          <view class="category-adv" v-if="category.image_adv" @click="diyRedirectTo(category.link_url)">
            <image :src="$util.img(category.image_adv)" mode="widthFix" />
          </view>
          <view class="goods-list" :data-template="value.template">
            <block v-if="goodsList.length">
              <view class="goods-item" v-for="(item, index) in goodsList" :key="index">
                <view class="goods-img" @click="toDetail(item)">
                  <image :src="goodsImg(item.goods_image)" mode="widthFix" @error="imgError(index)" />
                  <!-- <div>111</div> -->
                  <view class="sell-out" v-if="item.goods_stock <= 0">
                    <text class="iconfont icon-shuqing"></text>
                  </view>
                </view>
                <view class="info-wrap">
                  <view class="name-wrap" @click="toDetail(item)">
                    <view class="goods-name">{{ item.goods_name }}</view>
                  </view>
                  <view class="goods-tag" v-if="item.label_name">{{
                    item.label_name
                  }}</view>
                  <view class="price-wrap">
                    <view class="discount-price">
                      <text class="unit price-style small">￥</text>
                      <!-- <text class="price price-style large">{{ parseFloat(showPrice(item)).toFixed(2).split('.')[0] }}</text>
											<text class="unit price-style small">.{{ parseFloat(showPrice(item)).toFixed(2).split('.')[1] }}</text> -->

                      <block v-if="isShowPrice(item)">
                        <text class="price price-style large">{{
                          parseFloat(showPrice(item)).toFixed(2).split(".")[0]
                        }}</text>
                        <text class="unit price-style small">.{{
                          parseFloat(showPrice(item)).toFixed(2).split(".")[1]
                        }}</text>
                      </block>
                      <block v-else>
                        <text class="price price-style large">{{
                          item.price
                        }}</text>
                      </block>
                      <text class="unit price-style small" v-if="item.unit">/{{ item.unit }}</text>
                    </view>
                    <view class="member-price-tag" v-if="
                      item.member_price &&
                      item.member_price == showPrice(item)
                    ">
                      <image :src="$util.img('public/uniapp/index/VIP.png')" mode="widthFix" />
                    </view>
                    <view class="member-price-tag" v-else-if="item.promotion_type == 1">
                      <image :src="$util.img('public/uniapp/index/discount.png')" mode="widthFix" />
                    </view>
                  </view>
                  <view class="footer-wrap">
                    <view class="pro-info">
                      <view class="delete-price font-size-activity-tag color-tip price-font"
                        v-if="showMarketPrice(item)">
                        <text class="unit">￥</text>
                        <text>{{ showMarketPrice(item) }}/{{ item.unit }}</text>
                      </view>
                    </view>
                    <view class="right-wrap" v-if="value.template == 2 || value.template == 4">
                      <block v-if="item.is_virtual">
                        <view class="color-base-bg select-sku" @click="toDetail(item)">立即购买</view>
                      </block>
                      <block v-else>
                        <view v-if="item.goods_spec_format" class="color-base-bg select-sku" @click="selectSku(item)">
                          <text>选规格</text>
                          <text class="num-tag" v-if="item.num">{{
                            item.num
                          }}</text>
                        </view>
                        <block v-else>
                          <block v-if="
                            cartList['goods_' + item.goods_id] &&
                            cartList['goods_' + item.goods_id][
                            'sku_' + item.sku_id
                            ]
                          ">
                            <view class="num-action reduce" @click="reduce(item)">
                              <text class="iconfont icon-jian"></text>
                            </view>
                            <view class="num">{{
                              cartList["goods_" + item.goods_id][
                                "sku_" + item.sku_id
                              ].num
                            }}</view>
                            <view class="num-action" :id="'cart-num-' + index" @click="increase($event, item)">
                              <text class="iconfont icon-jia"></text>
                              <view class="click-event"></view>
                            </view>
                          </block>
                          <view class="num-action" v-else :id="'cart-num-' + index" @click="increase($event, item, 0)">
                            <text class="iconfont icon-jia"></text>
                            <view class="click-event"></view>
                          </view>
                        </block>
                      </block>
                    </view>
                    <view class="right-wrap" v-if="value.template == 3">
                      <view class="color-base-bg select-sku" @click="toDetail(item)">立即购买</view>
                    </view>
                  </view>
                </view>
              </view>
            </block>
            <view class="category-empty" v-else>
              <image :src="$util.img('public/uniapp/category/empty.png')" mode="widthFix" />
            </view>
            <view class="end-tips" ref="endTips" v-if="
              last &&
              (categoryId == -1 ||
                !category.child_list ||
                (category.child_list &&
                  categoryId == category.child_list.length - 1))
            ">已经到底了~</view>
            <view class="end-tips" ref="endTips" v-else @click="switchCategory('next')">
              <text class="iconfont icon-xiangshangzhanhang"></text>
              上滑查看下一分类
            </view>
          </view>
          <loading-cover ref="loadingCover" :init-show="loading"></loading-cover>
        </scroll-view>
      </view>

      <block v-if="loadType == 'all' && goodsList.length">
        <view class="goods-list" :data-template="value.template">
          <view class="goods-item" v-for="(item, index) in goodsList" :key="index">
            <view class="goods-img" @click="toDetail(item)">
              <image :src="goodsImg(item.goods_image)" mode="widthFix" @error="imgError(index)" :lazy-load="true" />
              <!-- <div>222</div> -->
              <view class="sell-out" v-if="item.goods_stock <= 0">
                <text class="iconfont icon-shuqing"></text>
              </view>
            </view>
            <view class="info-wrap">
              <view class="name-wrap" @click="toDetail(item)">
                <view class="goods-name">{{ item.goods_name }}</view>
              </view>
              <view class="price-wrap">
                <view class="goods-tag" v-if="item.label_name">{{
                  item.label_name
                }}</view>
                <view class="discount-price">
                  <text class="unit price-style small">￥</text>
                  <text class="price price-style large">{{
                    parseFloat(showPrice(item)).toFixed(2).split(".")[0]
                  }}</text>
                  <text class="unit price-style small">.{{
                    parseFloat(showPrice(item)).toFixed(2).split(".")[1]
                  }}</text>
                </view>
                <view class="member-price-tag" v-if="
                  item.member_price && item.member_price == showPrice(item)
                ">
                  <image :src="$util.img('public/uniapp/index/VIP.png')" mode="widthFix" />
                </view>
                <view class="member-price-tag" v-else-if="item.promotion_type == 1">
                  <image :src="$util.img('public/uniapp/index/discount.png')" mode="widthFix" />
                </view>
              </view>
              <view class="footer-wrap">
                <view class="pro-info">
                  <view class="delete-price font-size-activity-tag color-tip price-font" v-if="showMarketPrice(item)">
                    <text class="unit">￥</text>
                    <text>{{ showMarketPrice(item) }}</text>
                  </view>
                </view>
                <view class="right-wrap" v-if="value.template == 2">
                  <block v-if="item.is_virtual">
                    <view class="color-base-bg select-sku" @click="toDetail(item)">立即购买</view>
                  </block>
                  <block v-else>
                    <view v-if="item.goods_spec_format" class="color-base-bg select-sku" @click="selectSku(item)">
                      <text>选规格</text>
                      <text class="num-tag" v-if="item.num">{{
                        item.num
                      }}</text>
                    </view>
                    <block v-else>
                      <block v-if="
                        cartList['goods_' + item.goods_id] &&
                        cartList['goods_' + item.goods_id][
                        'sku_' + item.sku_id
                        ]
                      ">
                        <view class="num-action reduce" @click="reduce(item)">
                          <text class="iconfont icon-jian"></text>
                        </view>
                        <view class="num">{{
                          cartList["goods_" + item.goods_id][
                            "sku_" + item.sku_id
                          ].num
                        }}</view>
                        <view class="num-action" :id="'cart-num-' + index" @click="increase($event, item)">
                          <text class="iconfont icon-jia"></text>
                          <view class="click-event"></view>
                        </view>
                      </block>
                      <view class="num-action" v-else :id="'cart-num-' + index" @click="increase($event, item, 0)">
                        <text class="iconfont icon-jia"></text>
                        <view class="click-event"></view>
                      </view>
                    </block>
                  </block>
                </view>
                <view class="right-wrap" v-if="value.template == 3">
                  <view class="color-base-bg select-sku" @click="toDetail(item)">立即购买</view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </block>
    </block>
  </view>
</template>

<script>
export default {
  name: "diy-category-item",
  props: {
    category: {
      type: Object,
    },
    value: {
      type: Object,
      default: () => {
        return {};
      },
    },
    index: {
      type: Number,
      default: 0,
    },
    select: {
      type: Number,
      default: 0,
    },
    oneCategorySelect: {
      type: Number,
      default: 0,
    },
    last: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      type: "goods",
      level: 3,
      categoryId: -1,
      loading: false,
      goodsList: [],
      pageIndex: 0,
      pageSize: 10,
      totalPage: 1,
      touchstartPosition: 0,
      scrollType: "top",
      contentWrapHeight: 0,
      scrollIntoView: "category-2--1",
      scrollTop: 0,
      loadType: "",
      timeout: {},
      cartEditRepeat: false,
    };
  },
  created() {
    this.type = this.value.template == 1 ? "category" : "goods";
    if (this.index == this.select && this.pageIndex == 0) this.getGoodsList();
    this.loadType =
      this.value.goodsLevel == 1 && this.value.loadType == "all"
        ? "all"
        : "part";
  },
  mounted() {
    setTimeout(() => {
      try {
        const query = uni.createSelectorQuery().in(this);
        query
          .select(".scroll-goods-view")
          .boundingClientRect((data) => {
            if (data) this.contentWrapHeight = data.height;
          })
          .exec();
      } catch (e) { }
    }, 1000);
  },
  watch: {
    oneCategorySelect: function () {
      this.scrollTop = -1;
      this.goodsList = [];
      this.selectCategory(-1);
    },
    select: function () {
      if (this.index == this.select) {
        this.scrollTop = 0;
        if (this.pageIndex == 0) {
          this.getGoodsList();
        } else if (this.$refs.loadingCover && this.loadType == "part") {
          this.$refs.loadingCover.show();
          setTimeout(() => {
            this.$refs.loadingCover.hide();
          }, 300);
        }
        if (!this.contentWrapHeight) {
          const query = uni.createSelectorQuery().in(this);
          query
            .select(".scroll-goods-view")
            .boundingClientRect((data) => {
              if (data) this.contentWrapHeight = data.height;
            })
            .exec();
        }
      } else if (this.loadType == "part") {
        this.scrollTop = -1;
      }
    },
    "globalStoreInfo.store_id": {
      handler(nval, oval) {
        if (nval != oval) {
          if (this.index == this.select || this.loadType == "all") {
            this.pageIndex = 0;
            this.categoryId = -1;
            this.totalPage = 1;
            this.getGoodsList();
          }
        }
      },
      deep: true,
    },
  },
  methods: {
    isShowPrice(item) {
      return !(parseFloat(item.price).toString() == "NaN");
    },
    /**
     * 查询商品列表
     */
    getGoodsList() {
      if (
        this.type != "goods" ||
        this.loading ||
        this.pageIndex >= this.totalPage
      )
        return;
      this.loading = true;
      this.pageIndex++;
      if (
        this.$refs.loadingCover &&
        this.pageIndex == 1 &&
        this.loadType == "part"
      ) {
        setTimeout(() => {
          this.$refs.loadingCover.show();
        });
      }

      let order = "";
      let sort = "";
      if (this.value.sortWay) {
        if (this.value.sortWay == "default") {
          // 综合排序
          order = "";
          sort = "";
        } else if (this.value.sortWay == "sales") {
          // 销量排序
          order = "sale_num";
          sort = "desc";
        } else if (this.value.sortWay == "price") {
          // 价格排序
          order = "discount_price";
          sort = "desc";
        } else if (this.value.sortWay == "news") {
          // 上架时间排序
          order = "create_time";
          sort = "desc";
        }
      }
      this.$api.sendRequest({
        url: "/api/goodssku/pageByCategory",
        data: {
          page: this.pageIndex,
          page_size: this.pageSize,
          category_id:
            this.categoryId != -1
              ? this.category.child_list[this.categoryId].category_id
              : this.category.category_id,
          order: order,
          sort: sort,
        },
        success: (res) => {
          if (res.code == 0 && res.data) {
            if (this.pageIndex == 1) this.goodsList = [];
            this.goodsList = this.goodsList.concat(res.data.list);
            this.loadGoodsCartNum();
            this.totalPage = res.data.page_count;
            this.loading = false;
            if (this.$refs.loadingCover && this.loadType == "part")
              this.$refs.loadingCover.hide();
            setTimeout(() => {
              if (this.loadType == "all")
                this.$emit("loadfinish", this.pageIndex == 1 ? this.index : -1);
              const query = uni.createSelectorQuery().in(this);
              query
                .select(".goods-list")
                .boundingClientRect((data) => {
                  if (data && data.height < this.contentWrapHeight)
                    this.scrollType = "none";
                })
                .exec();
            }, 500);
          }
        },
      });
    },
    /**
     * 商品图片处理
     * @param {Object} imgStr
     */
    goodsImg(imgStr) {
      let imgs = imgStr.split(",");
      return imgs[0]
        ? this.$util.img(imgs[0], { size: this.value == 3 ? "big" : "mid" })
        : this.$util.getDefaultImage().goods;
    },
    imgError(index) {
      this.goodsList[index].goods_image = this.$util.getDefaultImage().goods;
    },
    showPrice(data) {
      let price = data.discount_price;
      if (
        data.member_price &&
        parseFloat(data.member_price) < parseFloat(price)
      )
        price = data.member_price;
      return price;
    },
    showMarketPrice(item) {
      if (item.market_price_show) {
        let price = this.showPrice(item);
        if (item.market_price > 0) {
          return item.market_price;
        } else if (parseFloat(item.price) > parseFloat(price)) {
          return item.price;
        }
      }
      return "";
    },
    /**
     * 跳转商品详情
     * @param {Object} item
     */
    toDetail(item) {
      this.$util.redirectTo("/pages/goods/detail", {
        goods_id: item.goods_id,
      });
    },
    /**
     * 购物车数量增加
     */
    increase(event, data) {
      if (!this.storeToken) {
        this.$emit("tologin");
        return;
      }

      if (this.cartEditRepeat) return;

      let cart =
        this.cartList["goods_" + data.goods_id] &&
          this.cartList["goods_" + data.goods_id]["sku_" + data.sku_id]
          ? this.cartList["goods_" + data.goods_id]["sku_" + data.sku_id]
          : null;
      let cartNum = cart ? cart.num : 0;
      let api = cart && cart.cart_id ? "/api/cart/edit" : "/api/cart/add";
      let minBuy = data.min_buy > 0 ? data.min_buy - 1 : 0;
      let num = cartNum >= data.min_buy ? cartNum : minBuy;
      let _num = num + 1;
      let cart_id = cart ? cart.cart_id : 0;

      if (_num > parseInt(data.stock)) {
        this.$util.showToast({
          title: "商品库存不足",
        });
        return;
      }
      if (data.is_limit && data.max_buy && _num > parseInt(data.max_buy)) {
        this.$util.showToast({
          title: `该商品每人限购${data.max_buy}${data.unit || "件"}`,
        });
        return;
      }

      const query = uni.createSelectorQuery().in(this);
      query
        .select("#" + event.currentTarget.id + " .click-event")
        .boundingClientRect((data) => {
          if (data) {
            this.$emit("addCart", data.left, data.top);
          }
        })
        .exec();

      if (this.timeout[data.sku_id]) clearTimeout(this.timeout[data.sku_id]);

      if (cart) {
        this.cartList["goods_" + data.goods_id]["sku_" + data.sku_id].num =
          _num;
      } else {
        // 如果商品第一次添加，则初始化数据
        if (!this.cartList["goods_" + data.goods_id]) {
          this.cartList["goods_" + data.goods_id] = {};
        }

        let discount_price = data.discount_price;
        if (
          data.member_price > 0 &&
          Number(data.member_price) <= Number(data.discount_price)
        ) {
          discount_price = data.member_price;
        }

        this.cartList["goods_" + data.goods_id]["sku_" + data.sku_id] = {
          cart_id,
          goods_id: data.goods_id,
          sku_id: data.sku_id,
          num: _num,
          discount_price,
        };
      }

      this.$forceUpdate();

      this.timeout[data.sku_id] = setTimeout(() => {
        this.cartEditRepeat = true;
        this.$api.sendRequest({
          url: api,
          data: {
            cart_id,
            sku_id: data.sku_id,
            num: _num,
          },
          success: (res) => {
            this.cartEditRepeat = false;
            if (res.code == 0) {
              if (cart_id == 0) {
                this.cartList["goods_" + data.goods_id][
                  "sku_" + data.sku_id
                ].cart_id = res.data;
              }
              this.$store.dispatch("cartCalculate");
            } else {
              this.$util.showToast({
                title: res.message,
              });
            }
          },
        });
      }, 0);
    },
    /**
     * 购物车数量减少
     */
    reduce(data) {
      if (this.cartEditRepeat) return;

      let cart =
        this.cartList["goods_" + data.goods_id] &&
          this.cartList["goods_" + data.goods_id]["sku_" + data.sku_id]
          ? this.cartList["goods_" + data.goods_id]["sku_" + data.sku_id]
          : null;
      let num = cart.num > data.min_buy ? cart.num : 1;
      let api = num > 1 ? "/api/cart/edit" : "/api/cart/delete";
      let _num = num - 1;

      if (this.timeout[data.sku_id]) clearTimeout(this.timeout[data.sku_id]);

      if (_num) {
        this.cartList["goods_" + data.goods_id]["sku_" + data.sku_id].num =
          _num;
      } else {
        delete this.cartList["goods_" + data.goods_id]["sku_" + data.sku_id];
        if (Object.keys(this.cartList["goods_" + data.goods_id]).length == 2) {
          delete this.cartList["goods_" + data.goods_id];
        }
      }
      this.$forceUpdate();

      // 防止点击太快
      if (cart && cart.cart_id == 0) {
        return;
      }

      this.timeout[data.sku_id] = setTimeout(() => {
        this.cartEditRepeat = true;
        this.$api.sendRequest({
          url: api,
          data: {
            cart_id: cart.cart_id,
            sku_id: data.sku_id,
            num: _num,
          },
          success: (res) => {
            this.cartEditRepeat = false;
            if (res.code == 0) {
              this.$store.dispatch("cartCalculate");
            } else {
              this.$util.showToast({
                title: res.message,
              });
            }
          },
        });
      }, 0);
    },
    /**
     * 选择规格
     * @param {Object} data
     */
    selectSku(data) {
      if (!this.storeToken) {
        this.$emit("tologin");
        return;
      }
      this.$emit("selectsku", data);
    },
    selectCategory(index) {
      this.categoryId = index;
      this.pageIndex = 0;
      this.totalPage = 1;
      this.getGoodsList();
      setTimeout(() => {
        this.scrollIntoView = "category-2-" + index;
      });
    },
    /**
     * 滚动到底部加载
     */
    scrolltolower() {
      this.getGoodsList();
    },
    /**
     * 监听滚动
     * @param {Object} e
     */
    listenScroll(e) {
      if (e.detail.scrollTop <= 10) {
        this.scrollType = "top";
      } else if (
        parseInt(e.detail.scrollTop + this.contentWrapHeight + 30) >=
        e.detail.scrollHeight
      ) {
        this.scrollType = "bottom";
      } else {
        this.scrollType = "";
      }
    },
    /**
     * 触摸开始
     * @param {Object} e
     */
    touchstart(e) {
      this.touchstartPosition = e.changedTouches[0].clientY;
    },
    /**
     * 触摸结束
     * @param {Object} e
     */
    touchend(e) {
      let end = e.changedTouches[0].clientY;
      if (
        (this.scrollType == "top" || this.scrollType == "none") &&
        end - this.touchstartPosition > 100
      ) {
        this.switchCategory("prev");
      } else if (
        (this.scrollType == "bottom" || this.scrollType == "none") &&
        this.touchstartPosition - end > 100
      ) {
        this.switchCategory("next");
      }
    },
    /**
     * 切换分类
     * @param {Object} action
     */
    switchCategory(action) {
      if (action == "prev") {
        if (this.categoryId == -1) {
          let index = this.index - 1;
          if (index == -1) return;
          this.$emit("switch", index);
        } else {
          let index = this.categoryId - 1;
          this.selectCategory(index);
        }
      } else {
        if (
          this.categoryId == -1 ||
          (this.category.child_list &&
            this.categoryId == this.category.child_list.length - 1)
        ) {
          let index = this.index + 1;
          this.$emit("switch", index);
        } else {
          let index = this.categoryId + 1;
          this.selectCategory(index);
        }
      }
    },
    diyRedirectTo(link) {
      if (!link) return;
      this.$util.diyRedirectTo(JSON.parse(link));
    },
    //加载商品在购物车的总数量
    loadGoodsCartNum(isRefresh = false) {
      this.goodsList.forEach((item) => {
        item.num = this.cartList["goods_" + item.goods_id]
          ? this.cartList["goods_" + item.goods_id].num
          : 0;
      });
      if (isRefresh) this.$forceUpdate();
    },
  },
};
</script>

<style lang="scss">
.item-wrap {
  width: 100%;
  box-sizing: border-box;
  padding: 0 24rpx;

  &.goods {
    height: 100%;
  }
}

.category-title {
  padding: 20rpx 0;
  font-size: 28rpx;
  font-weight: bold;
  color: #222;
  position: relative;
  text-align: center;

  &::after,
  &::before {
    content: " ";
    width: 46rpx;
    border-top: 2rpx solid #dfdfdf;
    position: absolute;
    top: 50%;
  }

  &::after {
    margin-left: 40rpx;
  }

  &::before {
    margin-left: -80rpx;
  }
}

.category-adv {
  width: 100%;
  overflow: hidden;
  line-height: 1;
  padding: 20rpx 0;

  image {
    width: 100%;
    border-radius: 8rpx;
  }
}

.category-list {
  display: flex;
  flex-wrap: wrap;

  .category-item {
    width: 33.33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16rpx;
    box-sizing: border-box;

    .img-box {
      width: 80%;
      padding-top: 80%;
      margin: 0 auto;
      overflow: hidden;
      margin-bottom: 20rpx;
      position: relative;

      image {
        position: absolute;
        width: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .name {
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      text-align: center;
      line-height: 1;

      font-size: 24rpx;
    }
  }
}

.goods-list {
  .goods-item {
    padding: 0 0 26rpx 0;
    background: #fff;
    display: flex;
    position: relative;

    .goods-img {
      width: 180rpx;
      height: 180rpx;
      overflow: hidden;
      border-radius: $border-radius;
      margin-right: 14rpx;

      image {
        width: 100%;
        height: 100%;
      }
    }

    .goods-tag {
      color: #fff;
      line-height: 1;
      padding: 7rpx 10rpx;
      font-size: $font-size-goods-tag;
      width: fit-content;
      border-radius: $border-radius;
      background: $base-color;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: -6rpx;
        left: 20rpx;
        border-left: 10rpx solid transparent;
        border-right: 10rpx solid transparent;
        border-top: 10rpx solid $base-color;
      }
    }

    .goods-tag-img {
      position: absolute;
      border-top-left-radius: $border-radius;
      width: 80rpx;
      height: 80rpx;
      top: 26rpx;
      left: 26rpx;
      z-index: 5;
      overflow: hidden;

      image {
        width: 100%;
        height: 100%;
      }
    }

    .sell-out {
      position: absolute;
      z-index: 1;
      width: 180rpx;
      height: 180rpx;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
      border-radius: $border-radius;

      text {
        color: #fff;
        font-size: 150rpx;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
      }
    }

    .info-wrap {
      flex: 1;
      display: flex;
      flex-direction: column;
      width: 0;
    }

    .name-wrap {
      flex: 1;
    }

    .goods-name {
      font-size: $font-size-base;
      line-height: 1.3;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .introduction {
      line-height: 1;
      margin-top: 10rpx;
    }

    .discount-price {
      display: inline-block;
      font-weight: bold;
      line-height: 1;
      margin-top: 16rpx;
      color: var(--price-color);

      .unit {
        margin-right: 6rpx;
      }
    }

    .pro-info {
      display: flex;
      margin-top: 16rpx;

      .delete-price {
        text-decoration: line-through;
        flex: 1;

        .unit {
          margin-right: 0rpx;
        }
      }

      &>view {
        line-height: 1;

        &:nth-child(2) {
          text-align: right;
        }
      }
    }

    .member-price-tag {
      display: inline-block;
      width: 60rpx;
      line-height: 1;
      margin-left: 6rpx;
      height: 28rpx;

      image {
        width: 100%;
        height: 100%;
      }
    }

    .footer-wrap {
      display: flex;
      justify-content: space-between;

      .right-wrap {
        display: flex;
        align-items: center;
        justify-content: end;

        .num {
          width: auto;
          padding: 0 20rpx;
          line-height: 1;
        }

        .num-action {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40rpx;
          height: 40rpx;
          background: $base-color;
          border-radius: 50%;
          position: relative;

          .click-event {
            position: absolute;
            width: 2rpx;
            height: 2rpx;
            left: 0;
            top: 0;
            transform: translate(-50%, -50%);
            z-index: 5;
          }

          &.reduce {
            width: 38rpx;
            height: 38rpx;
            background-color: transparent;
            border: 2rpx solid $base-color;
            box-sizing: border-box;

            .icon-jian {
              color: $base-color;
            }
          }
        }

        .icon-jian,
        .icon-jia {
          color: var(--btn-text-color);
          font-weight: bold;
          font-size: 26rpx;
          line-height: 1;
        }

        .select-sku {
          font-weight: bold;
          color: var(--btn-text-color);
          font-size: 24rpx;
          padding: 16rpx 24rpx;
          position: relative;
          // height: 40rpx;
          line-height: 1;
          text-align: center;
          border-radius: 50rpx;

          .num-tag {
            position: absolute;
            top: 0;
            right: 0;
            transform: translateY(-50%);
            display: inline-block;
            box-sizing: border-box;
            color: #fff;
            line-height: 1.2;
            text-align: center;
            font-size: 24rpx;
            padding: 0 6rpx;
            min-width: 32rpx;
            border-radius: 16rpx;
            background-color: $base-color;
            border: 2rpx solid #fff;
          }
        }
      }
    }
  }

  &[data-template="3"] .goods-item {
    flex-direction: column;

    .info-wrap {
      width: 100%;
      margin-top: 12rpx;
    }

    .goods-img {
      width: 100%;
      height: auto;
      margin-right: 0;
      line-height: 1;
      position: relative;

      image {
        border-radius: 8rpx;
      }

      .sell-out {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: auto;
        top: 0;
        left: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.5);
        border-radius: $border-radius;

        text {
          color: #fff;
          font-size: 240rpx;
        }
      }
    }

    .select-sku {
      font-weight: bold;
      width: 128rpx;
      height: 52rpx !important;
      line-height: 52rpx !important;
    }
  }
}

.categoty-goods-wrap {
  display: flex;
  flex-direction: column;
  height: 100%;

  .scroll-goods-view {
    flex: 1;
    height: 0;
    transform: translateX(0px);
  }
}

.screen-category-wrap {
  display: flex;

  .icon-unfold {
    font-size: 24rpx;
    color: #999;
    padding: 0 0 0 20rpx;
  }
}

.screen-category {
  flex: 1;
  width: 0;
  padding: 0 0 20rpx 0;
  white-space: nowrap;
  height: 60rpx;

  .item {
    display: inline-block;
    padding: 4rpx 24rpx;
    background: #f5f5f5;
    color: #666;
    margin-right: 20rpx;
    border-radius: 40rpx;

    &.selected {
      background-color: $base-color;
      color: var(--btn-text-color);
    }
  }
}

/deep/ .uni-popup__wrapper-box {
  border-radius: 0;
}

.screen-category-popup {
  display: flex;

  .screen-category {
    white-space: break-spaces;
    padding: 20rpx;
    height: auto;
  }

  .title {
    line-height: 1;
    margin-bottom: 20rpx;
    font-weight: bold;
  }

  .item {
    margin-bottom: 20rpx;
  }
}

.end-tips {
  text-align: center;
  color: #999;
  font-size: 24rpx;
  padding: 30rpx 0 30rpx 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

/deep/ .loading-layer {
  background: #fff !important;
}

.category-empty {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 100rpx;

  image {
    width: 280rpx;
    height: 252rpx;
  }

  .tips {
    font-size: 26rpx;
    font-weight: 500;
    color: #999;
    margin-top: 50rpx;
  }
}

.screen-category-4 .item {
  background-color: #f2f2f2 !important;
  padding: 10rpx 24rpx;
  line-height: 1;
  font-size: $font-size-tag;

  &.selected {
    background-color: var(--main-color-shallow) !important;
    color: var(--main-color);
  }
}

.price-wrap {
  margin-top: 0;
  display: flex;
  align-items: center;
}
</style>
