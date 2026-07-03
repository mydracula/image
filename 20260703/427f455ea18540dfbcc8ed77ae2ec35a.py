from AutoGameClass import *

###################################################################################################################################
auto = AutoGame('向僵尸开炮', '学习技能', debug=False)
if not auto.get_window_info():
    logging.warning("未找到向僵尸开炮小程序，请先打开向僵尸开炮小程序")
    sys.exit()

try:
    while not auto.is_exit:
        # 学习技能
        auto.study_skill()
        time.sleep(1)
except KeyboardInterrupt:
    logging.info('🛑 正在退出自动化脚本...')
except Exception as ex:
    logging.error(f"异常信息：{ex}\n堆栈详情：\n{traceback.format_exc()}")
finally:
    auto.cleanup()
