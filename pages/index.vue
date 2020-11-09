<template>
  <div>
    <div class="row">
      <div class="column column-100">
        <div class="boxBtnSort">
          <button @click="selectionSort()">Selection Sort</button>
          <button @click="insertionSort()">Insertion Sort</button>
          <button @click="bubbleSort(bubble)">Bubble Sort</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column column-25 box_sidebar">
        <div class="sidebar">
          <div class="sidebar_head">
            <h2 @click="bubbleSort()">SIDE BAR</h2>
          </div>
          <div class="sidebar_content">
            <div class="contents"></div>
            <div class="contents"></div>
            <div class="contents"></div>
            <div class="contents"></div>
          </div>
        </div>
      </div>
      <div class="column column-75">
        <div class="content_home">
          <div class="row">
            <div class="column column-50 pr-0 pl-0">
              
              <div class="box">
                <!--Start Slide-->
                <div class="slider">
                  <p>Slider 1</p>
                </div>
                <!--Start Slide-->

                <!--Start Content Tabs-->
                <div class="tabs">
                  <div class="list_tabs">
                    <button class="button button-outline">Tab 1</button>
                    <button class="button button-outline">Tab 2</button>
                    <button class="button button-outline">Tab 3</button>
                  </div>
                  <div class="content_tabs">
                    <div class="tab">
                      <div class="head_tabs">
                        <div class="float-left"><h2>Title Lorem Ipsum</h2></div>
                        <div class="float-right"><p>01-06-2001</p></div>
                      </div>
                      <div class="list_content">
                        <div class="contents"></div>
                        <div class="contents"></div>
                        <div class="contents"></div>
                        <div class="contents"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--End Content Tabs-->

                <!--End Footer-->
                <div class="footer">
                  <div class="box_footer">
                    <div class="float-left"><p>text foot 2</p></div>
                    <div class="float-right"><p>text foot 1</p></div>
                  </div>
                </div>
                <!--End Footer-->

              </div>
            </div>
            <div class="column column-50 pl-0">

              <!-- Start Section 1 -->
              <div class="box_1">
                <div class="row">
                  <div class="column column-50">
                    <div class="box_content bgGrey">
                      <p>Text 1</p>
                    </div>
                  </div>
                  <div class="column column-50">
                    <div class="box_content">
                      <p>text 2</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Section 1 -->

              <!-- Start Section 2 -->
              <div class="box_section2">
                <div class="box_2">
                  <div class="row">
                    <div class="column column-33 w100">
                      <div class="box_content bgGrey">
                        <p>text 4</p>
                      </div>
                    </div>
                    <div class="column column-33 w100">
                      <div class="box_content">
                        <p>text 5</p>
                      </div>
                    </div>
                    <div class="column column-33 w100">
                      <div class="box_content">
                        <p>text 6</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Section 2 -->

              <!-- Start Section 3 -->
              <div class="box_3">
                <div class="row">
                  <div class="column column-50 pr-0">
                    <div class="mb-15">
                      <div class="box_content head_box_3">
                        <p>Lorem Ipsum</p>
                      </div>
                      <div class="row">
                        <div class="column column-50 pr-0 br-1">
                          <div class="box_4">
                            <div class="box_content_4">
                              <p>Lorem Ipsum</p>
                            </div>
                          </div>
                        </div>
                        <div class="column column-50 pl-0">
                          <div class="box_4">
                            <div class="box_content_4">
                              <p>Lorem Ipsum</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="row">
                          <div class="column column-100">
                            <div class="content">
                              <div class="contents"></div>
                              <div class="contents"></div>
                              <div class="contents"></div>
                              <div class="contents"></div>
                              <div class="contents"></div>
                              <div class="contents"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column column-50 pl-0">
                    <div class="box_content_vertical">
                      
                      <div class="box_list_vertical">
                        <div class="column pl-0 pr-0">
                          <div class="box_vertical">
                            <p>TEXT LOREM</p>
                          </div>
                        </div>
                        <div class="column pl-0 pr-0">
                          <div class="box_vertical box_vertical_2">
                            <p>TEXT LOREM</p>
                          </div>
                        </div>
                        <div class="column pl-0 pr-0">
                          <div class="box_vertical box_vertical_50 box_vertical_3">
                            <p>TEXT LOREM</p>
                          </div>
                          <div class="box_vertical box_vertical_50 box_vertical_3">
                            <p>TEXT LOREM</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <!-- End Section 3 -->


            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
    
  },
  data() {
    return {
      //Buat Array
      angka: [27, 38, 3, 49, 9, 82, 10, 21, 4, 12],
      bubble: [72, 154, 7, 3462, 15, 375, 36, 11, 4, 1, 4466, 216, 21, 958, 182],
    }
  },
  async mounted() {
    
  },
  methods: {
    selectionSort() {
      var x = this 
      //Loop variabel i kurang dari, atau tidak melebihi jumlah banyak array di atas
      for (var i = 0; i < x.angka.length - 1; i++) {
        //Loop variabel j hingga kurang dari sama dengan array angka
        for (var j = i + 1; j <= x.angka.length - 1; j++) {
          //Cek jka angka pertama lebih besar dari pada angka berikutnya
          if (x.angka[i] > x.angka[j]) {
            var temp = x.angka[j]
            x.angka[j] = x.angka[i]
            x.angka[i] = temp
          }
        }
      }
      console.log('Selection Sort : ' + this.angka) //Print Hasil
    },
    insertionSort() {
      var x = this
      for (var i = 0; i < x.angka.length; i++) {
        var val = x.angka[i];
        var j = i-1;
        while (j>=0 && x.angka[j] > val) {
          x.angka[j + 1] = x.angka[j]
          j--;
        }
        x.angka[j + 1] = val;
      }
      console.log(this.angka) //Print Hasil
    },

    bubbleSort(a){
      console.log(a) //Print Hasil
      var swapp;
      var n = a.length-1; //Identifikasi n adalah jumlah array kurang satu
      var x=a; //Identifikasi x adalah array

      do {
        swapp = false;
        for (var i=0; i < n; i++) //Loop i hinggal kurang dari atau tidak melebihi jumlah array
        {
          if (x[i] < x[i+1]) //Check jika nilai x lebih kecil dari pada nila x tambah 1
          {
            var temp = x[i];
            x[i] = x[i+1];
            x[i+1] = temp;
            swapp = true;
          }
        }
        n--;
      } while (swapp);
      return x; //Ulangi ke variable x
    },
  },
}
</script>
