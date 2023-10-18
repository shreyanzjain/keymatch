import 'package:flutter/material.dart';
import 'package:file_picker/file_picker.dart';
import 'package:open_app_file/open_app_file.dart';

void main() {
  runApp(const Main());
}

class Main extends StatelessWidget {
  const Main({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: 'ROSP',
      home: Home(),
    );
  }
}

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  int index = 0;
  @override
  Widget build(BuildContext context) {
    var nav = [
      UploadResume(),
      UploadJobs(),
      const Uploaded(),
    ];
    return Scaffold(
      body: SplitView(
        menu: Container(
          color: Colors.black87,
          child: Column(
            children: [
              const Padding(
                padding: EdgeInsets.symmetric(
                  vertical: 10.0,
                ),
              ),
              TextButton(
                onPressed: () => setState(() {
                  index = 0;
                }),
                child: const Text(
                  'Upload Resume',
                  style: TextStyle(
                    fontSize: 24.0,
                    color: Colors.white,
                    fontWeight: FontWeight.w300,
                  ),
                ),
              ),
              const Padding(
                padding: EdgeInsets.symmetric(
                  vertical: 10.0,
                ),
              ),
              TextButton(
                onPressed: () => setState(() {
                  index = 1;
                }),
                child: const Text(
                  'Upload Job',
                  style: TextStyle(
                    fontSize: 24.0,
                    color: Colors.white,
                    fontWeight: FontWeight.w300,
                  ),
                ),
              ),
              const Padding(
                padding: EdgeInsets.symmetric(
                  vertical: 10.0,
                ),
              ),
              TextButton(
                onPressed: () => setState(() {
                  index = 2;
                }),
                child: const Text(
                  'Uploaded',
                  style: TextStyle(
                    fontSize: 24.0,
                    color: Colors.white,
                    fontWeight: FontWeight.w300,
                  ),
                ),
              ),
            ],
          ),
        ),
        content: nav[index],
      ),
    );
  }
}

class SplitView extends StatelessWidget {
  const SplitView({
    Key? key,
    required this.menu,
    required this.content,
    this.breakpoint = 600,
    this.menuWidth = 240,
  }) : super(key: key);
  final Widget menu;
  final Widget content;
  final double breakpoint;
  final double menuWidth;

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    if (screenWidth >= breakpoint) {
      return Row(
        children: [
          SizedBox(
            width: menuWidth,
            child: menu,
          ),
          Container(width: 0.5, color: Colors.black),
          Expanded(child: content),
        ],
      );
    } else {
      return Scaffold(
        body: content,
        drawer: SizedBox(
          width: menuWidth,
          child: Drawer(
            child: menu,
          ),
        ),
      );
    }
  }
}

// ignore: must_be_immutable
class UploadResume extends StatelessWidget {
  UploadResume({super.key});
  PlatformFile? file;

  Future<void> picksinglefile() async {
    FilePickerResult? result = await FilePicker.platform.pickFiles();
    if (result != null) {
      file = result.files.first;
      file == null ? false : OpenAppFile.open(file!.path.toString());
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        const Text(
          'Upload Resume',
          style: TextStyle(
            fontSize: 40.0,
            color: Colors.black,
          ),
        ),
        const SizedBox(
          height: 100.0,
        ),
        ElevatedButton(
          style: ButtonStyle(
            textStyle: MaterialStateProperty.all(
              const TextStyle(fontSize: 20.0),
            ),
            fixedSize: MaterialStateProperty.all(
              const Size(240, 50),
            ),
            backgroundColor: MaterialStateProperty.all(
              Colors.black87,
            ),
          ),
          onPressed: picksinglefile,
          child: const Text('Upload'),
        ),
      ],
    );
  }
}

class UploadJobs extends StatelessWidget {
  UploadJobs({super.key});

  @override
  Widget build(BuildContext context) {
    final _size = MediaQuery.of(context).size;
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          const Text(
            'Upload Jobs',
            style: TextStyle(
              fontSize: 40.0,
              color: Colors.black,
            ),
          ),
          const SizedBox(
            height: 10.0,
          ),
          Container(
            width: _size.width * 0.45,
            child: TextFormField(
              style: const TextStyle(
                  color: Colors.black), // Set text color to white
              decoration: const InputDecoration(
                labelText: 'Title',
                labelStyle: TextStyle(color: Colors.black),
                enabledBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.all(Radius.circular(10.0)),
                  borderSide: BorderSide(color: Colors.black),
                ),
                focusedBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.all(Radius.circular(10.0)),
                  borderSide: BorderSide(color: Colors.black),
                ),
              ),
            ),
          ),
          const SizedBox(height: 10.0),
          Container(
            width: _size.width * 0.45,
            child: TextFormField(
              style: const TextStyle(
                  color: Colors.black), // Set text color to white
              decoration: const InputDecoration(
                labelText: 'Company',
                labelStyle: TextStyle(color: Colors.black),
                enabledBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.all(Radius.circular(10.0)),
                  borderSide: BorderSide(color: Colors.black),
                ),
                focusedBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.all(Radius.circular(10.0)),
                  borderSide: BorderSide(color: Colors.black),
                ),
              ),
            ),
          ),
          const SizedBox(height: 10.0),
          Container(
            width: _size.width * 0.65,
            child: TextFormField(
              style: const TextStyle(
                color: Colors.black,
              ), // Set text color to white
              maxLines: 3,
              decoration: const InputDecoration(
                labelText: 'Description',
                labelStyle: TextStyle(color: Colors.black),
                enabledBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.all(Radius.circular(10.0)),
                  borderSide: BorderSide(color: Colors.black),
                ),
                focusedBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.all(Radius.circular(10.0)),
                  borderSide: BorderSide(color: Colors.black),
                ),
              ),
            ),
          ),
          const SizedBox(height: 20.0),
          ElevatedButton(
            style: ButtonStyle(
              textStyle: MaterialStateProperty.all(
                const TextStyle(fontSize: 20.0),
              ),
              fixedSize: MaterialStateProperty.all(
                const Size(240, 50),
              ),
              backgroundColor: MaterialStateProperty.all(
                Colors.black87,
              ),
            ),
            onPressed: () {},
            child: const Text('Upload'),
          ),
        ],
      ),
    );
  }
}

class Uploaded extends StatelessWidget {
  const Uploaded({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        'No Uploaded files',
      ),
    );
  }
}
